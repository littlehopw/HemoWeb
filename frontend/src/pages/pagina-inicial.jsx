import '../App.css';
import hemowebLogo from '../assets/hemoweb-logo.png';
import vectorLogin from '../assets/vector-login.png'; 
import vectorHero from '../assets/vector-hero.png';
import vectorAbout from '../assets/vector-about.png';
import vectorWhy from '../assets/vector-why.png';  
import vectorMessage from '../assets/vector-message.png';

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
        <img src={vectorAbout} alt="Sobre Nós" className="about-image" />
      </div>
      <div>
        <h2>O que nós somos?</h2>
        <p>
          Somos uma plataforma digital dedicada a centralizar e organizar as informações dos doadores de sangue no Brasil.

Nosso sistema visa substituir os métodos tradicionais, como telefonemas e listas impressas, por uma gestão moderna e eficiente. 

Com funcionalidades como agendamento online e notificações personalizadas, oferecemos aos usuários a possibilidade de se programar para a doação de forma prática e sem a necessidade de contato direto com os locais de doação, otimizando o processo.
        </p>
      </div>
    </div>
  );
}

function Why() {
  return (
    <div className="why-container">
      <div>
      <p>A doação de sangue é um ato altruísta e de solidariedade, que ajuda a salvar muitas vidas. É um gesto de amor ao próximo que pode gerar muitos sorrisos.</p>
      <h4>É importante destacar que não há um substituto para o sangue e sua disponibilidade é essencial em diversas situações.</h4>
      <p>Seu consumo é diário e contínuo, já que a transfusão de sangue é necessária em diversas situações, tais como anemias cronicas, cirurgias de urgência, acidentes que causam hemorragias, complicações da dengue, febre amarela, tratamento de câncer e outras doenças graves.</p>
      </div>
      <div>
        <h2>Por que doar?</h2>
        <h1>Ajude a salvar vidas!</h1>
        <img src={vectorWhy} alt="Por que doar?" className="about-image" />
      </div>
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


function paginaInicial() {
    return (
      <div className="paginaInicial">
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

export default paginaInicial;