import { Link } from "react-router-dom";
import { useCart } from "../store/cart";
import { formatARS } from "../utils/currency";

export default function ProductCard({ p }) {
  const add = useCart((s) => s.add);

  return (
    <article className="card">
      <img src={p.image} alt={p.title} className="thumb" />
      <h3 style={{ margin: ".8rem 0 .4rem" }}>{p.title}</h3>
      <p className="desc">{p.description}</p>

      <div className="actions">
        <strong>{formatARS(p.price)}</strong>
        <div style={{ display: "flex", gap: ".5rem" }}>
          <button className="btn" onClick={() => add(p, 1)}>
            Agregar
          </button>
          <Link className="btn secondary" to={`/product/${p.id}`}>
            Ver
          </Link>
        </div>
      </div>
    </article>
  );
}
