import React from "react";
import "./styles/AplicantSection.css";

import { ReactComponent as ExplorarIcon } from "../assets/explorar.svg";
import { ReactComponent as UpdateIcon } from "../assets/update.svg";
import { ReactComponent as ViewIcon } from "../assets/view.svg";

const cardsData = [
  {
    key: "explorar",
   
    title: "Explorar vacantes",
    Icon: ExplorarIcon,
    text: "Descubre las últimas ofertas de empleo que se ajustan a tu perfil y postúlate en segundos.",
    link:"https://trabajito.com.bo",
    linkText: "Ver vacantes",
  },
  {
    key: "update",
    Icon: UpdateIcon,
    title: "Actualizar mi CV",
    text: "Mantén tu currículum siempre al día: añade nuevas habilidades, experiencias y logros.",
    link: process.env.REACT_APP_CV_URL,
    linkText: "Actualizar ahora",
  },
  {
    key: "view",
    Icon: ViewIcon,
    title: "Ver mis postulaciones",
    text: "Revisa el estado de todas tus aplicaciones y recibe notificaciones en tiempo real.",
    link: "https://trabajito.com.bo",
    linkText: "Mis postulaciones",
  },
];

export default function AplicantSection() {
  const goLogin = () => {
    window.open("https://trabajito.com.bo", "_blank");
  };
  return (
    <section className="hero-section-aplicant">
      <div className="section-aplicant-content">
        <div className="aplicant-section-header">
          <h2>Encuentra el trabajo ideal y sin complicaciones</h2>
          <p>
            Encuentra el trabajo ideal sin complicaciones En Trabajito te
            conectamos con oportunidades reales. Postúlate a empleos o pasantías
            en segundos, gestiona tu CV en línea, y haz seguimiento a cada
            aplicación. Fácil | Rápido | Seguro. Tú enfócate en mostrar tu
            talento. Nosotros nos encargamos del resto.
          </p>
        </div>
        <div className="top-section">
          <div className="video-container">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/LWFoZHDWkmk"
              title="Video demostrativo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="info-container">
            <p>
              Empieza tu camino hacia el éxito laboral con Trabajito. Conectamos
              a los mejores talentos con las empresas más innovadoras.
            </p>
            <p>
              ¿Aún no tienes cuenta? Regístrate y descubre un mundo de
              oportunidades laborales. ¡Es gratis y fácil!
            </p>
            <button className="btn-pedido" onClick={goLogin}>
          Iniciar Sesión
        </button>
          </div>
        </div>
        <div className="cards-section">
          {cardsData.map(({ key, title, Icon,text, link, linkText }) => (
            <div className="card" key={key}>
              <h4 className="card-title">
              {title}
                <Icon className="card-icon" />  
              </h4>
              <p>{text}</p>
              <a href={link}>{linkText}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
