import React from "react";
import { useNavigate } from 'react-router-dom';
import "./styles/HeroSection.css";


const partnerLogos = [
  { src: "/conecta.jpg",   alt: "Conecta"   },
  { src: "/farmacorp.jpg", alt: "Farmacorp" },
  { src: "/vian_srl_logo.jpg",     alt: "Vian " },
  { src: "/dismac.jpg",     alt: "Dismac" },
  { src: "/digicorp.jpg",     alt: "Digicorp" },
];

export default function HeroSection() {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/free-trial');
    };
  return (
    <section className="hero-section">
      {/* Fila superior */}
      <div className="hero-top">
        <div className="hero-content">
          <div className="hero-categories">
            Reclutamiento | Contrata | Optimiza | Evalúa
          </div>
          <h1>Where your work history keeps growing</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <div className="button-and-trial-info">
            <button className="btn-primary" onClick={handleClick}>Start free trial</button>
            <p className="trial-info">Agenda una reunión y obtén 7 días gratis</p>
          </div>
        </div>

        <div className="hero-image">
          <img src="/designer.png" alt="laptop" />
        </div>
      </div>

      {/* Fila inferior, solo para los logos */}
      <div className="hero-bottom">
      {partnerLogos.map((logo) => (
            <img
            key={logo.alt}
            className="partner-logo"
            src={logo.src}
            alt={logo.alt}
          />
      ))}
      </div>
    </section>
  );
}
