import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

function Navbar({ cartCount }) {
  const location = useLocation();
  const width = useWindowSize();
  const isMobile = width < 768;
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = (path) => ({
    fontSize: 12,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: location.pathname === path ? "#0a0a0a" : "#999",
    transition: "color 0.2s",
  });

  return (
    <>
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: isMobile ? "20px 24px" : "24px 48px",
        borderBottom: "1px solid #e8e8e8",
        position: "sticky",
        top: 0,
        background: "#fff",
        zIndex: 100,
      }}>
        <Link to="/" style={{ fontFamily: "var(--font-serif)", fontSize: 20, fontWeight: 400, letterSpacing: "0.05em" }}>
          FORME
        </Link>

        {isMobile ? (
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <Link to="/cart" style={{ ...linkStyle("/cart"), position: "relative" }}>
              Cart
              {cartCount > 0 && (
                <span style={{
                  position: "absolute", top: -8, right: -12,
                  background: "#0a0a0a", color: "#fff", fontSize: 10,
                  width: 16, height: 16, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>{cartCount}</span>
              )}
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ fontSize: 20, color: "#0a0a0a" }}>
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        ) : (
          <div style={{ display: "flex", gap: 40 }}>
            <Link to="/" style={linkStyle("/")}>Home</Link>
            <Link to="/catalog" style={linkStyle("/catalog")}>Catalog</Link>
          </div>
        )}

        {!isMobile && (
          <Link to="/cart" style={{ ...linkStyle("/cart"), position: "relative" }}>
            Cart
            {cartCount > 0 && (
              <span style={{
                position: "absolute", top: -8, right: -12,
                background: "#0a0a0a", color: "#fff", fontSize: 10,
                width: 16, height: 16, borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>{cartCount}</span>
            )}
          </Link>
        )}
      </nav>

      {/* Mobile menu */}
      {isMobile && menuOpen && (
        <div style={{
          position: "fixed", top: 61, left: 0, right: 0, bottom: 0,
          background: "#fff", zIndex: 99, padding: "48px 24px",
          display: "flex", flexDirection: "column", gap: 32,
          borderTop: "1px solid #e8e8e8",
        }}>
          {[["Home", "/"], ["Catalog", "/catalog"]].map(([label, path]) => (
            <Link key={path} to={path} onClick={() => setMenuOpen(false)} style={{
              fontFamily: "var(--font-serif)", fontSize: 32, fontWeight: 400, color: "#0a0a0a",
            }}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default Navbar;