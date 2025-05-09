import React from "react";
import "./styles/FooterLinks.css"
export default function FooterLinks() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Design Win</h4>
          <ul>
            <li>Design Win for Startups</li>
            <li>Portafolio</li>
            <li>Carreras</li>
            <li>Servicios</li>
            <li>Precios</li>
            <li>Blog</li>
            <li>Free Trial</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Recursos</h4>
          <ul>
            <li>Design Win para agencias</li>
            <li>Design Win para ecommerce</li>
            <li>Por qué elegir Design Win</li>
            <li>Plantilla de parrilla de contenidos para redes</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Servicios</h4>
          <ul>
            <li>Diseño de marca</li>
            <li>Social media</li>
            <li>Presentaciones</li>
            <li>Ilustración</li>
          </ul>
        </div>

        <div className="footer-column">
          <ul className="footer-last-column">
            <li>Edición de video</li>
            <li>Animación 2D/3D</li>
            <li>Diseño web</li>
            <li>Diseño de producto</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
