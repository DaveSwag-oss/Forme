import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

function Product({ addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return (
    <div style={{ padding: 48 }}>
      <p>Product not found. <Link to="/catalog">Back to catalog</Link></p>
    </div>
  );

  return (
    <main style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "90vh" }}>

      {/* Image */}
      <div style={{ background: "#f5f5f5", overflow: "hidden" }}>
        <img
          src={product.img}
          alt={product.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Info */}
      <div style={{ padding: "80px 64px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Link to="/catalog" style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#999", marginBottom: 48, display: "flex", alignItems: "center", gap: 8 }}>
          ← Back
        </Link>

        <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#999", marginBottom: 16 }}>
          {product.category}
        </p>

        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 48, fontWeight: 400, marginBottom: 24, lineHeight: 1.1 }}>
          {product.name}
        </h1>

        <p style={{ fontSize: 28, fontWeight: 300, marginBottom: 32 }}>
          CHF {product.price.toLocaleString()}
        </p>

        <p style={{ fontSize: 14, color: "#555", lineHeight: 1.8, marginBottom: 48, maxWidth: 360 }}>
          {product.desc}
        </p>

        {/* Details */}
        <div style={{ borderTop: "1px solid #e8e8e8", paddingTop: 32, marginBottom: 48 }}>
          {[
            ["Material", "Natural oak / linen"],
            ["Dimensions", "W 65 × D 70 × H 82 cm"],
            ["Lead time", "4–6 weeks"],
            ["Origin", "Switzerland"],
          ].map(([key, val]) => (
            <div key={key} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid #e8e8e8" }}>
              <span style={{ fontSize: 12, color: "#999", textTransform: "uppercase", letterSpacing: "0.1em" }}>{key}</span>
              <span style={{ fontSize: 12 }}>{val}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => addToCart(product)}
          style={{
            padding: "16px 32px",
            background: "#0a0a0a",
            color: "#fff",
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            border: "none",
            cursor: "pointer",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={e => e.target.style.opacity = "0.8"}
          onMouseLeave={e => e.target.style.opacity = "1"}
        >
          Add to cart
        </button>
      </div>

    </main>
  );
}

export default Product;