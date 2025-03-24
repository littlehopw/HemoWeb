import "./App.css";
import hemowebLogo from "./assets/hemoweb-logo.png";
import hemowebLogoBw from "./assets/hemoweb-logo-blackwhite.png";
import vectorLogin from "./assets/vector-login.png";
import vectorHero from "./assets/vector-hero.png";
import vectorAbout from "./assets/vector-about.png";
import vectorWhy from "./assets/vector-why.png";
import vectorMessage from "./assets/vector-message.png";

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
          <a href="#" className="header-nav-link">
            Página Inicial
          </a>
          <a href="#about" className="header-nav-link">
            Sobre Nós
          </a>
          <a href="#why" className="header-nav-link">
            Por que doar?
          </a>
          <a href="#hemocentros" className="header-nav-link">
            Hemocentros
          </a>
        </nav>
        {/* Call to Action*/}
        <div className="header-cta">
          <img src={vectorLogin} alt="Login Icon" className="h-5 w-5" />
          <a href="#" className="header-nav-link">
            Login
          </a>
        </div>
      </header>
    </div>
  );
}

function Hero() {
  return (
    <div className="hero-container">
      <div>
        <h1 className="h2-poppins text-primary-color-4">
          Bem-vindo ao HemoWeb
        </h1>
        <p className="h3-poppins text-black mt-8">
          Uma nova forma de salvar vidas!
        </p>
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
          Somos uma plataforma digital dedicada a centralizar e organizar as
          informações dos doadores de sangue no Brasil. Nosso sistema visa
          substituir os métodos tradicionais, como telefonemas e listas
          impressas, por uma gestão moderna e eficiente. Com funcionalidades
          como agendamento online e notificações personalizadas, oferecemos aos
          usuários a possibilidade de se programar para a doação de forma
          prática e sem a necessidade de contato direto com os locais de doação,
          otimizando o processo.
        </p>
      </div>
    </div>
  );
}

function Why() {
  return (
    <div className="why-container">
      <div>
        <p>
          A doação de sangue é um ato altruísta e de solidariedade, que ajuda a
          salvar muitas vidas. É um gesto de amor ao próximo que pode gerar
          muitos sorrisos.
        </p>
        <h4>
          É importante destacar que não há um substituto para o sangue e sua
          disponibilidade é essencial em diversas situações.
        </h4>
        <p>
          Seu consumo é diário e contínuo, já que a transfusão de sangue é
          necessária em diversas situações, tais como anemias cronicas,
          cirurgias de urgência, acidentes que causam hemorragias, complicações
          da dengue, febre amarela, tratamento de câncer e outras doenças
          graves.
        </p>
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
  return <div></div>;
}

function Message() {
  return (
    <div className="message-container">
      <img src={vectorMessage} alt="Mensagem" className="message-image" />
      <h2>Doe sangue</h2>
      <h3>salve vidas</h3>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
                {/* Links de Navegação */}
        <nav className="footer-nav">
          <a href="#" className="footer-nav-link">
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
          <a href="#" className="footer-nav-link">
            Contato
          </a>
        </nav>
        {/* Links de Redes Sociais */}
        <div className="footer-social">
          <a href="#" className="footer-social-link">
            <span className="sr-only">Facebook</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a href="#" className="footer-social-link">
            <span className="sr-only">Instagram</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.332.013 7.052.072 5.773.13 4.548.392 3.465 1.475 2.382 2.558 2.12 3.783 2.062 5.062.013 8.332 0 8.756 0 12s.013 3.668.072 4.948c.058 1.279.32 2.504 1.403 3.587 1.083 1.083 2.308 1.345 3.587 1.403 1.279.058 1.703.072 4.948.072s3.668-.013 4.948-.072c1.279-.058 2.504-.32 3.587-1.403 1.083-1.083 1.345-2.308 1.403-3.587.058-1.279.072-1.703.072-4.948s-.013-3.668-.072-4.948c-.058-1.279-.32-2.504-1.403-3.587-1.083-1.083-2.308-1.345-3.587-1.403C15.668.013 15.244 0 12 0z"></path>
              <circle cx="12" cy="12" r="3.5"></circle>
            </svg>
          </a>
          <a href="#" className="footer-social-link">
            <span className="sr-only">WhatsApp</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.78 11.78 0 0012 0 11.78 11.78 0 003.48 3.48 11.78 11.78 0 000 12c0 2.09.54 4.14 1.57 5.95L0 24l6.05-1.57A11.78 11.78 0 0012 24c2.09 0 4.14-.54 5.95-1.57A11.78 11.78 0 0024 12a11.78 11.78 0 00-3.48-8.52zM12 22.05c-1.87 0-3.68-.51-5.26-1.47l-.38-.23-3.59.93.93-3.59-.23-.38A10.05 10.05 0 011.95 12c0-5.58 4.52-10.05 10.05-10.05 2.69 0 5.22 1.05 7.12 2.95a10.05 10.05 0 012.95 7.12c0 5.58-4.52 10.05-10.05 10.05zm5.64-7.61c-.31-.16-1.84-.91-2.13-1.02-.29-.11-.5-.16-.71.16-.21.31-.82 1.02-1.01 1.23-.19.21-.37.23-.68.08-.31-.16-1.31-.48-2.5-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.63.14-.14.31-.37.45-.56.15-.19.19-.31.29-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.63-.52-.54-.71-.55h-.6c-.2 0-.52.08-.79.39-.27.31-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.21 2.11 3.23 5.12 4.53.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.84-.75 2.1-1.47.26-.72.26-1.34.18-1.47-.08-.13-.29-.21-.6-.37z"></path>
            </svg>
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

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="why">
        <Why />
      </div>
      <div id="hemocentros">
        <Hemocentros />
      </div>
      <Message />
      <Footer />
    </div>
  );
}

export default App;
