import React from "react";
import "./styles/CorreoSection.css";

export default function CorreoSection() {
  return (
    <section className="correo-section">
      <div className="correo-container">
        {/* Columna izquierda */}
        <div className="card-lefth">
          <img
            src="/logo_light.png"
            alt="Logo Design Win"
            className="newsletter-logo"
          />
          <p className="newsletter-description">
            Ayudamos a nuestros clientes a diseñar mejor y escalar más rápido
            con un servicio de diseño ilimitado, flexible y asequible.
          </p>
          <p className="newsletter-highlight">¡Prueba Design Win ahora!</p>
        </div>

        <div className="card-right">
          <p className="card-right-title">Suscríbete a nuestro newsletter</p>
          <form className="newsletter-form">
            <div style={{ display: "flex", gap: "1rem" }}>
              <input
                type="email"
                placeholder="Correo electrónico"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">
                Suscribirse
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
