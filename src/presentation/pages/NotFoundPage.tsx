/**
 * 404 Not Found Page
 */

import { Link } from 'react-router-dom';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <div className="container section">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <h2>Página no encontrada</h2>
          <p>Lo sentimos, la página que buscas no existe.</p>
          <Link to="/" className="btn-primary">
            Ir al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
