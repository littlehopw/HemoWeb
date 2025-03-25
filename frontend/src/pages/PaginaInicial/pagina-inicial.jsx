import '../../App.css';
import Header from './header.jsx';
import Hero from './hero.jsx';
import About from './about.jsx';
import Why from './why.jsx';
import Hemocentros from './hemocentros.jsx';
import Message from './message.jsx';
import Footer from '../../components/footer.jsx';

function PaginaInicial() {
    return (
      <div className="PaginaInicial">
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

export default PaginaInicial;