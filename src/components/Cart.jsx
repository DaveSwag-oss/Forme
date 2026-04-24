import { Link } from "react-router-dom";

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "64px 48px" }}>

      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 40, fontWeight: 400, marginBottom: 48 }}>
        Your cart
      </h1>

      {cart.length === 0 ? (
        <div style={{ textAlign: "center", padding: "80px 0", borderTop: "1px solid #e8e8e8" }}>
          <p style={{ fontSize: 14, color: "#999", marginBottom: 32 }}>Your cart is empty.</p>
          <Link to="/catalog" style={{
            display: "inline-block",
            background: "#0a0a0a",
            color: "#fff",
            padding: "14px 32px",
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}>
            View Catalog
          </Link>
        </div>
      ) : (
        <>
          <div style={{ borderTop: "1px solid #e8e8e8" }}>
            {cart.map((item) => (
              <div key={item.id} style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr auto",
                gap: 24,
                padding: "24px 0",
                borderBottom: "1px solid #e8e8e8",
                alignItems: "center",
              }}>
                <div style={{ background: "#f5f5f5", aspectRatio: "1", overflow: "hidden" }}>
                  <img src={item.img} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div>
                  <p style={{ fontSize: 14, marginBottom: 4 }}>{item.name}</p>
                  <p style={{ fontSize: 12, color: "#999", textTransform: "capitalize", marginBottom: 8 }}>{item.category}</p>
                  <p style={{ fontSize: 12, color: "#999" }}>Qty: {item.qty}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontSize: 14, marginBottom: 12 }}>CHF {(item.price * item.qty).toLocaleString()}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{ fontSize: 11, color: "#999", letterSpacing: "0.1em", textTransform: "uppercase", borderBottom: "1px solid #e8e8e8" }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "32px 0", borderBottom: "1px solid #e8e8e8", marginBottom: 32 }}>
            <span style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "#999" }}>Total</span>
            <span style={{ fontSize: 24, fontFamily: "var(--font-serif)", fontWeight: 400 }}>CHF {total.toLocaleString()}</span>
          </div>

<button
  onClick={() => alert("Checkout coming soon!")}
  style={{
    width: "100%",
    padding: "16px",
    background: "#0a0a0a",
    color: "#fff",
    fontSize: 11,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    border: "none",
    cursor: "pointer",
  }}
>
  Proceed to checkout
</button>
        </>
      )}
    </main>
  );
}

export default Cart;