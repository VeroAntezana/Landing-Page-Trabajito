import React from "react";
import "./styles/OrderSummary.css";
import SubscribeButton from "../components/SubscribeButton";

function OrderSummary() {
  const handleSubscribeClick = () => {
    console.log("¡Suscripción desde el resumen!");
  };

  return (
    <div className="order-summary-container">
      <div className="right-order-section">
        <h2 className="order-summary-title">Resumen del pedido</h2>

        <div className="order-item">
          <div className="item-details">
            <div className="item-icon">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path fill="#777" d="M4 4h16v10H4V4m0 12v4h16v-4H4Z" />
              </svg>
            </div>
            <div>
              <p className="item-name">(Prueba) Caja de 5 créditos</p>
              <p className="item-info">7 días de prueba gratuita</p>
            </div>
          </div>
          <p className="item-price">0,00 US$</p>
        </div>

        <div className="coupon-section">
          <label htmlFor="coupon" className="coupon-label">
            Código de cupón
          </label>
          <div className="coupon-input-group">
            <input type="text" id="coupon" className="coupon-input" />
            <button className="coupon-apply-button">Aplicar</button>
          </div>
        </div>

        <div className="separator"></div>

        <div className="subtotal-section">
          <p>Subtotal</p>
          <p>0,00 US$</p>
        </div>

        <div className="total-section">
          <p>Total general (USD)</p>
          <p>0,00 US$</p>
        </div>

        <div className="future-payments-section">
          <h3>Pagos futuros</h3>
          <div className="payment-info">
            <p>Monthly suscripción</p>
            <p>690,00 US$</p>
          </div>
          <p className="payment-start-date">Comenzando desde Dec 4, 2024</p>
        </div>

        <div className="renewal-total-section">
          <p>Total para renovación</p>
          <p>690,00 US$</p>
        </div>

        <p className="terms-agreement">
          Al enviar este formulario, aceptas nuestros términos de servicio
        </p>

        <SubscribeButton onClick={handleSubscribeClick}>
          Suscribirse
        </SubscribeButton>

        <div className="secure-payment">
        <img
            src="/image 37.png"
            alt="Pago seguro"
            width="20"
            height="20"
          />
          Pago seguro
        </div>

        <div className="payment-methods">
          <img src="/cardsdebit.png" alt="Mastercard" width="auto" />
        </div>

        <p className="powered-by">Powered by stripe</p>
      </div>
    </div>
  );
}

export default OrderSummary;
