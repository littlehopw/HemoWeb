import '../../App.css';
import Header from '../../components/pagina-principal/header.jsx';
import Hero from '../../components/pagina-principal/hero.jsx';
import About from '../../components/pagina-principal/about.jsx';
import Why from '../../components/pagina-principal/why.jsx';
import Hemocentros from '../../components/pagina-principal/hemocentros.jsx';
import Message from '../../components/pagina-principal/message.jsx';
import Footer from '../../components/pagina-principal/footer.jsx';

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