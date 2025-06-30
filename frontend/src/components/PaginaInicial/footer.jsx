import "../../../src/App.css";
import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="footer-container"
    >
      <div className="footer-content">
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
        </nav>        
        <p className="footer-social text-white !text-white">
          hemowebapp@gmail.com
        </p>
        <p className="footer-copyright">
          &copy; 2025 HemoWeb. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;