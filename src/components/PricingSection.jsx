import React from "react";
import "./styles/PricingSection.css";
import { useNavigate } from 'react-router-dom'; 

export default function PricingSection() {
   const navigate = useNavigate();
  const handleClick = () => {
    navigate('/free-trial');
  };
  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <h2 className="pricing-title">Elige tu paquete</h2>
        <p className="pricing-subtitle">
          Obtén acceso a diseños exclusivos con una sola compra. Paquetes
          adaptados a tus necesidades, al alcance de un clic.
        </p>

        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="card-header">
              <div className="price-black-bg">
                <img src="/designer_12.png" alt="Icono de créditos" />
              </div>
              <div className="card-header-text">
                <p>Caja de</p>
                <h3>Plan Individual</h3>
              </div>
            </div>
            <p>
              Este es el plan ideal para tí.
              {" "}
            </p>
            <p className="price">
              Bs.300 <span>/ mes</span>
            </p>
            <ul>
              <li>Beneficios</li>
              <li>
                <svg
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM11.7682 15.6402L16.7682 9.64018L15.2318 8.35982L10.9328 13.5186L8.70711 11.2929L7.29289 12.7071L10.2929 15.7071L11.0672 16.4814L11.7682 15.6402Z"
                    fill="#222222"
                  />
                </svg>
                Cantidad de empleos: 1
              </li>
              <li>
                <svg
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM11.7682 15.6402L16.7682 9.64018L15.2318 8.35982L10.9328 13.5186L8.70711 11.2929L7.29289 12.7071L10.2929 15.7071L11.0672 16.4814L11.7682 15.6402Z"
                    fill="#222222"
                  />
                </svg>
                Portal de empleos + Administrador de empleo
              </li>
              <li>
                <svg
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM11.7682 15.6402L16.7682 9.64018L15.2318 8.35982L10.9328 13.5186L8.70711 11.2929L7.29289 12.7071L10.2929 15.7071L11.0672 16.4814L11.7682 15.6402Z"
                    fill="#222222"
                  />
                </svg>
                Publicación del anuncio en nuestras redes sociales
              </li>
              <li>
              <svg
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM11.7682 15.6402L16.7682 9.64018L15.2318 8.35982L10.9328 13.5186L8.70711 11.2929L7.29289 12.7071L10.2929 15.7071L11.0672 16.4814L11.7682 15.6402Z"
                    fill="#222222"
                  />
                </svg>
                Otros beneficios</li>
            </ul>
            <button className="btn-primary" onClick={handleClick}>Comenzar prueba gratis</button>
          </div>

          <div className="pricing-card">
            <div className="card-header">
              <div className="price-black-bg">
                <img src="/designer_12.png" alt="Icono de créditos" />
              </div>
              <div className="card-header-text">
                <p>Caja de</p>
                <h3>Plan Inicial</h3>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
              elit.{" "}
            </p>
            <p className="price">
              Bs.1400 <span>/ años</span>
            </p>
            <ul>
              <li>Beneficios</li>
              <li>
                <svg
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM11.7682 15.6402L16.7682 9.64018L15.2318 8.35982L10.9328 13.5186L8.70711 11.2929L7.29289 12.7071L10.2929 15.7071L11.0672 16.4814L11.7682 15.6402Z"
                    fill="#222222"
                  />
                </svg>
                Cantidad de empleos: 5
              </li>
              <li>
                <svg
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM11.7682 15.6402L16.7682 9.64018L15.2318 8.35982L10.9328 13.5186L8.70711 11.2929L7.29289 12.7071L10.2929 15.7071L11.0672 16.4814L11.7682 15.6402Z"
                    fill="#222222"
                  />
                </svg>
                Portal de empleos + Administrador de empleo
              </li>
              <li>
                <svg
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM11.7682 15.6402L16.7682 9.64018L15.2318 8.35982L10.9328 13.5186L8.70711 11.2929L7.29289 12.7071L10.2929 15.7071L11.0672 16.4814L11.7682 15.6402Z"
                    fill="#222222"
                  />
                </svg>
                Actividad y estadísticas
              </li>
              <li>
              <svg
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM11.7682 15.6402L16.7682 9.64018L15.2318 8.35982L10.9328 13.5186L8.70711 11.2929L7.29289 12.7071L10.2929 15.7071L11.0672 16.4814L11.7682 15.6402Z"
                    fill="#222222"
                  />
                </svg>
                Otros beneficios</li>
            </ul>
            <button className="btn-primary" onClick={handleClick}>Comenzar prueba gratis</button>
          </div>

          <div className="pricing-card">
            <div className="card-header">
              <div className="price-black-bg">
                <img src="/designer_12.png" alt="Icono de créditos" />
              </div>
              <div className="card-header-text">
                <p>Caja de</p>
                <h3>Anuncio + Módulo de Tests</h3>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
              elit.{" "}
            </p>
            <p className="price">
              Bs.500 <span>/ mes</span>
            </p>
            <ul>
              <li>Beneficios</li>
              <li>
                <svg
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM11.7682 15.6402L16.7682 9.64018L15.2318 8.35982L10.9328 13.5186L8.70711 11.2929L7.29289 12.7071L10.2929 15.7071L11.0672 16.4814L11.7682 15.6402Z"
                    fill="#222222"
                  />
                </svg>
                Guardado de talentos favoritos
              </li>
              <li>
                <svg
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM11.7682 15.6402L16.7682 9.64018L15.2318 8.35982L10.9328 13.5186L8.70711 11.2929L7.29289 12.7071L10.2929 15.7071L11.0672 16.4814L11.7682 15.6402Z"
                    fill="#222222"
                  />
                </svg>
                Actividad y estadísticas
              </li>
              <li>
                <svg
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM11.7682 15.6402L16.7682 9.64018L15.2318 8.35982L10.9328 13.5186L8.70711 11.2929L7.29289 12.7071L10.2929 15.7071L11.0672 16.4814L11.7682 15.6402Z"
                    fill="#222222"
                  />
                </svg>
                Suscripción
              </li>
              <li>
              <svg
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM11.7682 15.6402L16.7682 9.64018L15.2318 8.35982L10.9328 13.5186L8.70711 11.2929L7.29289 12.7071L10.2929 15.7071L11.0672 16.4814L11.7682 15.6402Z"
                    fill="#222222"
                  />
                </svg>
                Otros beneficios</li>
            </ul>
            <button className="btn-primary" onClick={handleClick}>Comenzar prueba gratis</button>
          </div>
        </div>
      </div>
    </section>
  );
}
