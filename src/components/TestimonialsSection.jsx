import React from 'react'
import "./styles/TestimonialsSection.css"
export default function TestimonialsSection() {

    return (
        <section className="testimonials-section">
          <div className="testimonials-container">
            <h2 className="testimonials-heading">
             <span className="highlight-red">+1500 proyectos</span> terminados para 142 empresas alrededor del mundo
            </h2>
    
            <div className="testimonials-grid">
              {/* Tarjeta 1 */}
              <div className="testimonial-card">
                <p>
                  “Lo que más me gusta de trabajar con Design Win es que se puede
                  diseñar cualquier cosa, iterar rápido y lanzar en tiempo récord.”
                </p>
                <div className="author-info">
                  <div>
                    <span className="author-name">Andrés Bilbao</span>
                    <br />
                    <span className="author-position">Rappi</span>
                  </div>
                </div>
              </div>
    
              {/* Tarjeta 2 */}
              <div className="testimonial-card">
                <p>
                  “No queríamos comprometernos con aumentar nuestra operación de
                  diseño sin estar seguros de la flexibilidad. Con Design Win
                  recibimos la libertad de iterar con cambios rápidos y efectivos.”
                </p>
                <div className="author-info">
                
                  <img
                    src="/mariana.png"
                    alt="Mariana Mejía"
                    className="author-photo"
                  />
                  <div>
                    <span className="author-name">Mariana Mejía</span>
                    <br />
                    <span className="author-position">CEO de Viceversa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
