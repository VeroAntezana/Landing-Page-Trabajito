import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "./styles/SocialSection.css"
export default function SocialSection() {
  return (
    <div className="social-section">
      <div className="social-networks">
        <h3>Redes sociales</h3>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/trabajitobo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
          </li>
        </ul>
      </div>

      <div className="contact-info">
        <h3>Contáctanos</h3>
        <ul>
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> team@desaingwin.io
          </li>
          <li>
            <FontAwesomeIcon icon={faWhatsapp} /> +57 319 583 8956
          </li>
        </ul>
      </div>

      <div className="legal-links">
        <ul>
          <li>
            <a href="/privacy-policy">Política de privacidad</a>
          </li>
          <li>
            <a href="/terms-and-conditions">Términos y condiciones</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
