import { useState } from "react";
import { Link } from "react-router-dom";
import { products, categories } from "../data/products";

function Catalog({ addToCart }) {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? products
    : products.filter((p) => p.category === active);

  return (
    <main style={{ padding: "64px 48px" }}>

      {/* Header */}
      <div style={{ marginBottom: 48, borderBottom: "1px solid #e8e8e8", paddingBottom: 32 }}>
        <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", marginBottom: 12 }}>
          {filtered.length} objects
        </p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 40, fontWeight: 400 }}>
          Catalog
        </h1>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 64 }}>

        {/* Filters */}
        <div>
          <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", marginBottom: 20 }}>
            Category
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  textAlign: "left",
                  padding: "8px 0",
                  fontSize: 13,
                  textTransform: "capitalize",
                  color: active === cat ? "#0a0a0a" : "#999",
                  borderBottom: active === cat ? "1px solid #0a0a0a" : "1px solid transparent",
                  letterSpacing: "0.05em",
                  transition: "color 0.2s",
                  width: "fit-content",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "48px 24px",
        }}>
          {filtered.map((product) => (
            <div key={product.id}>
              <Link to={`/product/${product.id}`}>
                <div style={{
                  background: "#f5f5f5",
                  aspectRatio: "3/4",
                  overflow: "hidden",
                  marginBottom: 16,
                }}>
                  <img
                    src={product.img}
                    alt={product.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.04)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"}
                  />
                </div>
              </Link>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <p style={{ fontSize: 13, marginBottom: 4 }}>{product.name}</p>
                  <p style={{ fontSize: 11, color: "#999", textTransform: "capitalize" }}>{product.category}</p>
                </div>
                <p style={{ fontSize: 13 }}>CHF {product.price.toLocaleString()}</p>
              </div>
              <button
                onClick={() => addToCart(product)}
                style={{
                  marginTop: 12,
                  width: "100%",
                  padding: "10px",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  border: "1px solid #e8e8e8",
                  background: "#fff",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.target.style.background = "#0a0a0a"; e.target.style.color = "#fff"; }}
                onMouseLeave={e => { e.target.style.background = "#fff"; e.target.style.color = "#0a0a0a"; }}
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}

export default Catalog;