import '../../App.css';
import Header from '../../components/PaginaInicial/header.jsx';
import Hero from '../../components/PaginaInicial/hero.jsx';
import About from '../../components/PaginaInicial/about.jsx';
import Why from '../../components/PaginaInicial/why.jsx';
import Hemocentros from '../../components/PaginaInicial/hemocentros.jsx';
import Message from '../../components/PaginaInicial/message.jsx';
import Footer from '../../components/PaginaInicial/footer.jsx';

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