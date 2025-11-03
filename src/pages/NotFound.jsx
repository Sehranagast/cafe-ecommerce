import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="container" style={{ paddingTop: "1.1rem" }}>
      <h1>404</h1>
      <p>Página no encontrada.</p>
      <Link className="btn" to="/">
        Volver
      </Link>
    </main>
  );
}
