import '../../App.css';
import { Link } from 'react-router-dom';
import vectorHero from '../../assets/vector-hero.png';

function Hero() {
  return (
    <div className="hero-container">
      <div>
        <h1 className="h2-poppins text-primary-color-4">Bem-vindo ao HemoWeb</h1>
        <p className="h3-poppins text-black mt-8">Uma nova forma de salvar vidas!</p>
        <Link to="/cadastro"> 
        <button className="btn-text mt-8">Cadastre-se</button>
        </Link>
      </div>
      <div>
        <img src={vectorHero} alt="HemoWeb Hero" className="h-40 w-auto" />
      </div>
    </div>
  );
}

export default Hero;