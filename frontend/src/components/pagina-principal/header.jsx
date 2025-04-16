import "../../../src/App.css";
import hemowebLogo from '../../assets/hemoweb-logo.png';
import vectorLogin from '../../assets/vector-login.png'; 
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header-container">
      <header className="header">
        <div className="header-logo">
          <a href="#">
            <img src={hemowebLogo} alt="HemoWeb Logo" className="h-10 w-auto" />
          </a>
        </div>
        <nav className="header-nav">
          <a href="#" className="header-nav-link">Página Inicial</a>
          <a href="#about" className="header-nav-link">Sobre Nós</a>
          <a href="#why" className="header-nav-link">Por que doar?</a>
          <a href="#hemocentros" className="header-nav-link">Hemocentros</a>
        </nav>
        <div className='header-cta'>
        <img src={vectorLogin} alt="Login Icon" className="h-5 w-5" />
          <Link to="/login" className="header-nav-link">Login</Link> {/* Redireciona para a página de cadastro */}
        </div>
      </header>
    </div>
  );
}

export default Header;