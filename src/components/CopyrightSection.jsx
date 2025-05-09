import React from 'react';
import './styles/CopyrightSection.css'; 

export default function CopyrightSection() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="copyright-section">
      <p>Copyright &copy; {currentYear}. All rights reserved.</p>
    </div>
  );
}