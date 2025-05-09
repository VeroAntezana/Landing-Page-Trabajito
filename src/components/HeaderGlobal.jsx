import React, { useContext } from "react"
import { useNavigate, Link } from 'react-router-dom';
import { UserRoleContext } from "../contexts/UserRoleContext"

import "./styles/Header.css";

export default function HeaderGlobal() {
  const navigate = useNavigate();

  const { setRole } = useContext(UserRoleContext)

  const markApplicant = () => setRole("applicant")
  const markCompany   = () => setRole("company")
  const goFreeTrial   = () => navigate("/free-trial")
  return (
    <header className="header-container">
      <div className="header-logo">
      <Link to="/"  onClick={markCompany}> 
          <img src="/logo_sinfondo.png" alt="Logo" />
        </Link>
      </div>
      <nav className="header-nav">
      <ul>  
          <li><Link to="/company"  onClick={markCompany}>I'm company</Link></li>
          <li><Link to ="/aplicant" onClick={markApplicant}>I'm an applicant</Link></li>
        </ul>
        </nav>
      <div className="header-cta">
      <button className="btn-primary"  onClick={goFreeTrial}>Start free trial</button>
      </div>
    </header>
  );
}
