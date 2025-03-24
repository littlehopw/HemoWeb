import React from "react";
import { Link } from "react-router-dom"; // Importa o Link do React Router

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Links de Navegação */}
        <nav className="footer-nav">
          <Link to="/" className="footer-nav-link">
            Página Inicial
          </Link>
          <Link to="/#about" className="footer-nav-link">
            Sobre Nós
          </Link>
          <Link to="/#why" className="footer-nav-link">
            Por que doar?
          </Link>
          <Link to="/#hemocentros" className="footer-nav-link">
            Hemocentros
          </Link>
          <Link to="/contact" className="footer-nav-link">
            Contato
          </Link>
        </nav>
        {/* Links de Redes Sociais */}
        <div className="footer-social">
          <a href="#" className="footer-social-link">
            <span className="sr-only">Facebook</span>
            {/* SVG do Facebook */}
          </a>
          <a href="#" className="footer-social-link">
            <span className="sr-only">Instagram</span>
            {/* SVG do Instagram */}
          </a>
          <a href="#" className="footer-social-link">
            <span className="sr-only">WhatsApp</span>
            {/* SVG do WhatsApp */}
          </a>
        </div>
        {/* Texto de Copyright */}
        <p className="footer-copyright">
          &copy; 2025 HemoWeb. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;