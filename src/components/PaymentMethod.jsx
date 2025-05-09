import React from "react";
import "./styles/PaymentMethod.css";
import SubscribeButton from '../components/SubscribeButton'; 
export default function PaymentMethod() {
  const handleSubscribe = () => {
    console.log('¡Botón de suscribirse clickeado desde PaymentMethod!');
  };
  return (
    <div className="payment-method-container">
      <div className="left-payment-section">
        <div className="payment-method">
          <div className="payment-type">
            <h2>Método de pago</h2>
            <div className="options">
              <div className="option">
                <div className="icon">
                  <svg
                    width="28px"
                    height="28px"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>ionicons-v5-d</title>
                    <path d="M32,376a56,56,0,0,0,56,56H424a56,56,0,0,0,56-56V222H32Zm66-76a30,30,0,0,1,30-30h48a30,30,0,0,1,30,30v20a30,30,0,0,1-30,30H128a30,30,0,0,1-30-30Z" />
                    <path d="M424,80H88a56,56,0,0,0-56,56v26H480V136A56,56,0,0,0,424,80Z" />
                  </svg>
                </div>

                <div className="text">
                  <p>Credit Card or Debit</p>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="card-details">
            <div className="card-icon">
              <svg
                width="32px"
                height="32px"
                viewBox="0 -5 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>card</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Vivid.JS"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Vivid-Icons"
                    transform="translate(-123.000000, -572.000000)"
                  >
                    <g id="Icons" transform="translate(37.000000, 169.000000)">
                      <g id="card" transform="translate(78.000000, 390.000000)">
                        <g
                          transform="translate(8.000000, 13.000000)"
                          id="Rectangle-path"
                        >
                          <rect
                            fill="#FF6E6E"
                            fillRule="nonzero"
                            x="0"
                            y="0"
                            width="32"
                            height="22"
                            rx="3"
                          ></rect>
                          <rect
                            fill="#0C0058"
                            fillRule="nonzero"
                            x="0"
                            y="6"
                            width="32"
                            height="5"
                          ></rect>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Número de tarjeta"
              className="card-number-input"
            />
            <button className="use-link-button">Usar Link</button>
          </div>
          <p className="terms-acceptance">
            Al enviar este formulario, aceptas nuestros <br /> términos de
            servicio
          </p>
          <SubscribeButton onClick={handleSubscribe} >Suscribirse</SubscribeButton>
        </div>
      </div>
    </div>
  );
}
