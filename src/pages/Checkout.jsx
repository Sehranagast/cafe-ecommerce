import { useState } from "react";
import { useCart } from "../store/cart";
import { formatARS } from "../utils/currency";

export default function Checkout() {
  const { items, total, clear } = useCart();
  const [status, setStatus] = useState("idle");
  const [orderId, setOrderId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (items.length === 0) return;
    setStatus("processing");

    setTimeout(() => {
      const id = "ORD-" + Math.random().toString(36).slice(2, 8).toUpperCase();
      setOrderId(id);
      clear();
      setStatus("success");
    }, 800);
  };

  if (status === "success") {
    return (
      <main className="container" style={{ paddingTop: "1.1rem" }}>
        <div className="card">
          <h1>¡Gracias por tu compra!</h1>
          <p>
            Tu número de orden es <strong>{orderId}</strong>.
          </p>
          <p>Recibirás un correo con el detalle (simulado).</p>
        </div>
      </main>
    );
  }

  return (
    <main className="container" style={{ paddingTop: "1.1rem" }}>
      <h1>Checkout</h1>

      {items.length === 0 ? (
        <p>No hay ítems en el carrito.</p>
      ) : (
        <div
          className="grid"
          style={{ gridTemplateColumns: "1fr", gap: "1rem" }}
        >
          <section className="card">
            <h2 style={{ marginTop: 0 }}>Datos del comprador</h2>

            <form onSubmit={handleSubmit} className="form-grid">
              <input className="input" placeholder="Nombre" required />
              <input className="input" placeholder="Apellido" required />
              <input
                className="input"
                type="email"
                placeholder="Email"
                required
              />
              <input className="input" placeholder="Teléfono" />
              <input className="input" placeholder="Calle y número" required />
              <input className="input" placeholder="Ciudad" required />

              {/* Usar defaultValue en lugar de option selected */}
              <select className="input" required defaultValue="">
                <option value="" disabled>
                  Provincia
                </option>
                <option>Buenos Aires</option>
                <option>Córdoba</option>
                <option>Santa Fe</option>
                <option>Mendoza</option>
                <option>...</option>
              </select>

              <select className="input" required defaultValue="">
                <option value="" disabled>
                  Método de pago
                </option>
                <option>Tarjeta</option>
                <option>Transferencia</option>
                <option>Efectivo</option>
              </select>

              <button
                type="submit"
                className="btn"
                disabled={status === "processing"}
              >
                {status === "processing" ? "Procesando…" : "Pagar"}
              </button>
            </form>
          </section>

          <aside className="card">
            <h2 style={{ marginTop: 0 }}>Resumen</h2>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gap: ".5rem",
              }}
            >
              {items.map((i) => (
                <li
                  key={i.id}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>
                    {i.title} × {i.qty}
                  </span>
                  <span>{formatARS(i.price * i.qty)}</span>
                </li>
              ))}
            </ul>
            <hr
              style={{
                border: 0,
                borderTop: "1px solid var(--border)",
                margin: "1rem 0",
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>Total</strong>
              <strong>{formatARS(total())}</strong>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}
