import './App.css';
import hemowebLogo from './assets/hemoweb-logo.png';
import vectorLogin from './assets/vector-login.png'; 
import vectorHero from './assets/vector-hero.png';
import vectorAbout from './assets/vector-about.png';
import vectorWhy from './assets/vector-why.png';  
import vectorMessage from './assets/vector-message.png';

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

function Hero() {
  return (
    <div className="hero-container">
      <div>
        <h1 className="h2-poppins text-primary-color-4">Bem-vindo ao HemoWeb</h1>
        <p className="h3-poppins text-black mt-8">Uma nova forma de salvar vidas!</p>
        <button className="btn-text mt-8">Cadastre-se</button>
      </div>
      <div>
        <img src={vectorHero} alt="HemoWeb Hero" className="h-40 w-auto" />
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="about-container">
      <div>
        <img src={vectorAbout} alt="HemoWeb About" className="h-40 w-auto" />
      </div>
      <div>
        <h1 className="h2-poppins text-primary-color-4">Bem-vindo ao HemoWeb</h1>
       </div>
    </div>
  );
}

function Why() {
  return (
    <div>
      <h1>uai</h1> 
    </div>
  );
}

function Hemocentros() {
  return (
    <div>
      <h1>hemocentros</h1>
    </div>
  );
}

function Message() {
  return (
    <div>
      <h1>message</h1>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <h1>footer</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Why />
      <Hemocentros />
      <Message />
      <Footer />
    </div>
  );
}

export default App;