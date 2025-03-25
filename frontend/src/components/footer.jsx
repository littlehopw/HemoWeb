import "../../src/App.css";
import React from "react";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Links de Navegação */}
        <nav className="footer-nav">
          <a href="#top" className="footer-nav-link">
            Página Inicial
          </a>
          <a href="#about" className="footer-nav-link">
            Sobre Nós
          </a>
          <a href="#why" className="footer-nav-link">
            Por que doar?
          </a>
          <a href="#hemocentros" className="footer-nav-link">
            Hemocentros
          </a>
          <a href="#contact" className="footer-nav-link">
            Contato
          </a>
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