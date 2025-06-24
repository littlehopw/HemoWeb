import "../../../src/App.css";
import hemowebLogo from '../../assets/hemoweb-logo.png';
import vectorLogin from '../../assets/vector-login.png'; 
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <div className="header-container relative">
      <header className="header flex justify-between items-center px-4 py-2">
        {/* Logo que abre o menu no mobile */}
        <div className="header-logo">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Abrir menu"
          >
            <img src={hemowebLogo} alt="HemoWeb Logo" className="h-10 w-auto" />
          </button>
        </div>

        {/* Navegação normal (desktop) */}
        <nav className="header-nav hidden md:flex gap-6">
          <a href="#" className="header-nav-link">Página Inicial</a>
          <a href="#about" className="header-nav-link">Sobre Nós</a>
          <a href="#why" className="header-nav-link">Por que doar?</a>
          <a href="#hemocentros" className="header-nav-link">Hemocentros</a>
        </nav>

        {/* CTA (ícone + texto) - visível no desktop */}
        <div className="header-cta hidden md:flex items-center gap-2">
          <img src={vectorLogin} alt="Login Icon" className="h-5 w-5" />
          <Link to="/login" className="header-nav-link">Login</Link>
        </div>
      </header>

      {/* Menu dropdown mobile estilizado */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-[var(--primary-color-4)] shadow-md z-20 border-t border-gray-200">
          <ul className="flex flex-col p-4 space-y-4">
            <li>
  <Link
    to="/login"
    onClick={() => setMenuOpen(false)}
    className="hover:text-blue-700 font-semibold ml-6"
  >
    Login
  </Link>
</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
