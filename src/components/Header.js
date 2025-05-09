
import React, { useContext } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { UserRoleContext } from '../contexts/UserRoleContext';
import "./styles/Header.css";

export default function Header() {
  const navigate = useNavigate();
  const { setRole } = useContext(UserRoleContext);

  const goFreeTrial = () => navigate('/free-trial')
  const markCompany = () => setRole('company')
  return (
    <header className="header-container">
      <div className="header-logo">
      <Link to="/" onClick={markCompany}> 
          <img src="/logo_sinfondo.png" alt="Logo" />
        </Link>
      </div>
      <nav className="header-nav">
      <ul>
          <li><Link to="/beneficios" onClick={markCompany}>Services</Link></li>
          <li><Link to ="/" onClick={markCompany}>Portafolio</Link></li>
          <li><Link to="/pricing" onClick={markCompany}>Prices</Link></li>
          <li><Link to="/preguntas" onClick={markCompany}>Questions</Link></li>
          <li><Link to="#faq" onClick={markCompany}>I'm company</Link></li>
          <li><Link to="/aplicant" onClick={() => setRole('applicant')}>I'm an applicant</Link></li>
          <li><Link to="#login"onClick={markCompany}>Iniciar sesión</Link></li>
        </ul>
        </nav>
      <div className="header-cta">
      <button className="btn-primary" onClick={goFreeTrial}>Start free trial</button>
      </div>
    </header>
  );
}
