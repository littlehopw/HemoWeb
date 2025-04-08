import '../../App.css';
import Header from '../../components/header.jsx';
import Hero from '../../components/hero.jsx';
import About from '../../components/about.jsx';
import Why from '../../components/why.jsx';
import Hemocentros from '../../components/hemocentros.jsx';
import Message from '../../components/message.jsx';
import Footer from '../../components/footer.jsx';

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