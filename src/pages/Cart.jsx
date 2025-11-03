import { Link } from "react-router-dom";
import { useCart } from "../store/cart";
import { formatARS } from "../utils/currency";

export default function Cart() {
  const { items, setQty, remove, total, clear } = useCart();

  if (items.length === 0) {
    return (
      <main className="container" style={{ paddingTop: "1.1rem" }}>
        <h1>Carrito</h1>
        <p>Tu carrito está vacío.</p>
        <Link className="btn" to="/">
          Ir al catálogo
        </Link>
      </main>
    );
  }

  return (
    <main className="container" style={{ paddingTop: "1.1rem" }}>
      <h1>Carrito</h1>
      <table className="table">
        <thread>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thread>
        <tbody>
          {items.map((i) => (
            <tr key={i.id}>
              <td
                style={{ display: "flex", alignItems: "center", gap: ".7rem" }}
              >
                <img
                  src={i.image}
                  alt=""
                  width="60"
                  height="46"
                  style={{ objectFit: "cover", borderRadius: 8 }}
                />
                {i.title}
              </td>
              <td>
                <input
                  className="input"
                  type="number"
                  min="1"
                  value={i.qty}
                  onChange={(e) => setQty(i.id, Number(e.target.value) || 1)}
                  style={{ width: 82 }}
                />
              </td>
              <td>{formatARS(i.price)}</td>
              <td>{formatARS(i.price * i.qty)}</td>
              <td>
                <button className="btn secondary" onClick={() => remove(i.id)}>
                  Quitar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: ".6rem",
          marginTop: "1rem",
        }}
      >
        <strong>Total: {formatARS(total())}</strong>
        <Link className="btn" to="/checkout">
          Continuar
        </Link>
        <button className="btn secondary" onClick={clear}>
          Vaciar
        </button>
      </div>
    </main>
  );
}
