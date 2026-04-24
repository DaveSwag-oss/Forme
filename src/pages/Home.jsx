import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

function FadeIn({ children, delay = 0 }) {
  const ref = useRef();
  useEffect(() => {
    const el = ref.current;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`;
    const t = setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 50);
    return () => clearTimeout(t);
  }, [delay]);
  return <div ref={ref}>{children}</div>;
}

function Home() {
  const width = useWindowSize();
  const isMobile = width < 768;

  return (
    <main>
      {/* Hero */}
      <section style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        minHeight: isMobile ? "auto" : "90vh",
      }}>
        <div style={{ padding: isMobile ? "48px 24px" : "80px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <FadeIn delay={0.1}>
            <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", marginBottom: 24 }}>
              Est. 2024 — Swiss Design
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: isMobile ? "2.8rem" : "clamp(3rem, 6vw, 5.5rem)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 32 }}>
              Objects made<br />to last.
            </h1>
          </FadeIn>
          <FadeIn delay={0.5}>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.8, maxWidth: 340, marginBottom: 48 }}>
              A curated collection of furniture and objects designed for the considered home.
            </p>
          </FadeIn>
          <FadeIn delay={0.7}>
            <Link to="/catalog" style={{ display: "inline-block", background: "#0a0a0a", color: "#fff", padding: "14px 32px", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              View Catalog
            </Link>
          </FadeIn>
        </div>

        <div style={{ overflow: "hidden", height: isMobile ? 300 : "auto" }}>
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200"
            alt="Hero"
            style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.05)", animation: "zoomOut 1.2s ease forwards" }}
          />
        </div>
      </section>

      {/* Values strip */}
      <section style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", borderTop: "1px solid #e8e8e8", borderBottom: "1px solid #e8e8e8" }}>
        {[
          { label: "Material", value: "Natural only" },
          { label: "Origin", value: "Europe" },
          { label: "Guarantee", value: "10 years" },
        ].map((item) => (
          <div key={item.label} style={{ padding: isMobile ? "24px" : "32px 48px", borderBottom: isMobile ? "1px solid #e8e8e8" : "none", borderRight: isMobile ? "none" : "1px solid #e8e8e8" }}>
            <p style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#999", marginBottom: 8 }}>{item.label}</p>
            <p style={{ fontSize: 18, fontFamily: "var(--font-serif)", fontWeight: 400 }}>{item.value}</p>
          </div>
        ))}
      </section>

      {/* Featured */}
      <section style={{ padding: isMobile ? "48px 24px" : "80px 48px" }}>
        <FadeIn delay={0.1}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 32, fontWeight: 400 }}>New arrivals</h2>
            <Link to="/catalog" style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", borderBottom: "1px solid #e8e8e8", paddingBottom: 2 }}>
              View all
            </Link>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3, 1fr)", gap: isMobile ? 16 : 24 }}>
          {[
            { name: "Arc Chair", price: "CHF 890", img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600", id: 1 },
            { name: "Slab Table", price: "CHF 1,240", img: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600", id: 2 },
            { name: "Fold Lamp", price: "CHF 320", img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600", id: 3 },
          ].map((item, i) => (
            <FadeIn key={item.name} delay={0.2 + i * 0.15}>
              <Link to={`/product/${item.id}`} style={{ display: "block" }}>
                <div style={{ background: "#f5f5f5", aspectRatio: "3/4", overflow: "hidden", marginBottom: 16 }}>
                  <img src={item.img} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.04)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"}
                  />
                </div>
                <p style={{ fontSize: 13, marginBottom: 4 }}>{item.name}</p>
                <p style={{ fontSize: 12, color: "#999" }}>{item.price}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes zoomOut {
          from { transform: scale(1.05); }
          to { transform: scale(1); }
        }
      `}</style>
    </main>
  );
}

export default Home;