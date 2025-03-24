import React from "react";
import { Link } from "react-router-dom"; // Importa o Link do React Router
import "./App.css"; // Importa o CSS necessário
import hemowebLogo from "./assets/hemoweb-logo.png";
import vectorLogin from "./assets/vector-login.png";

function Header() {
  return (
    <div className="header-container">
      <header className="header">
        {/* Logo */}
        <div className="header-logo">
          <Link to="/">
            <img src={hemowebLogo} alt="HemoWeb Logo" className="h-10 w-auto" />
          </Link>
        </div>
        {/* Navigation Links */}
        <nav className="header-nav">
          <Link to="/#about" className="header-nav-link">
            Sobre Nós
          </Link>
          <Link to="/#why" className="header-nav-link">
            Por que doar?
          </Link>
          <Link to="/#hemocentros" className="header-nav-link">
            Hemocentros
          </Link>
        </nav>
        {/* Call to Action */}
        <div className="header-cta">
          <img src={vectorLogin} alt="Login Icon" className="h-5 w-5" />
          <Link to="/login" className="header-nav-link">
            Login
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;