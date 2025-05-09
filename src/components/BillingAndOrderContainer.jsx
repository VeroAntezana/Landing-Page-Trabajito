import React from 'react'
import BillingDetails from './BillingDetails';
import OrderSummary from './OrderSummary';
import PaymentMethod from './PaymentMethod';
import './styles/BillingAndOrderContainer.css';
export default function BillingAndOrderContainer() {
  return (
    <div className="billing-order-container">
     <div className="billing-payment-column"> 
        <BillingDetails />
        <PaymentMethod />
      </div>
      <OrderSummary />
  </div>
  )
}
