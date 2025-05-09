import React from 'react';
import './styles/SubscribeButton.css'; 

function SubscribeButton({ onClick, children, className }) {
  return (
    <button className={`subscribe-button ${className || ''}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default SubscribeButton;