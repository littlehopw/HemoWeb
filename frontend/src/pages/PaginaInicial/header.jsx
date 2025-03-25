import '../../App.css';
import hemowebLogo from '../../assets/hemoweb-logo.png';
import vectorLogin from '../../assets/vector-login.png'; 

function Header() {
  return (
    <div className="header-container">
      <header className="header">
        {/* Logo */}
        <div className="header-logo">
          <a href="#">
            <img src={hemowebLogo} alt="HemoWeb Logo" className="h-10 w-auto" />
          </a>
        </div>
        {/* Navigation Links */}
        <nav className="header-nav">
          <a href="#" className="header-nav-link">Página Inicial</a>
          <a href="#" className="header-nav-link">Sobre Nós</a>
          <a href="#" className="header-nav-link">Por que doar?</a>
          <a href="#" className="header-nav-link">Hemocentros</a>
        </nav>
        {/* Call to Action*/}
        <div className='header-cta'>
        <img src={vectorLogin} alt="Login Icon" className="h-5 w-5" />
          <a href="#" className="header-nav-link">Login</a>
        </div>
      </header>
    </div>
  );
}

export default Header;