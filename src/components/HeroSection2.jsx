import React from "react";
import "./styles/HeroSection2.css";

export default function HeroSection2() {
  return (
    <section className="hero-section2">
      <div className="section2-content">
        <h2>Te encantará nuestra aplicación</h2>
        <p>
          Nuestra plataforma de gestión creativa te brinda la posibilidad de
          enviar proyectos, dar feedback, y recibir todos tus proyectos,
          inluyendo sus editables, todo en un mismo lugar.
        </p>
        <div className="media-wrapper">
          <div className="image-col">
            <img src="/designer_11.png" alt="designer_11" />
          </div>

          <div className="video-col">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/Nfb-RvKK2sY?start=9"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
