import { Link } from 'react-router-dom';
import vectorHero from '../../assets/vector-hero.png';

function Hero() {
  return (
    <div className="max-w-full md:max-w-7xl mx-0 md:mx-auto bg-[var(--primary-color-1)] rounded-none md:rounded-[40px] flex flex-col md:flex-row justify-between pt-20 px-4 md:px-24">
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-[50px] text-[var(--primary-color-4)]" style={{ fontFamily: 'var(--h2-poppins)' }}>
          Bem-vindo ao HemoWeb
        </h1>
        <p
          className="font-normal text-[21px] text-[var(--black)] mt-8"
          style={{ fontFamily: 'var(--menu-poppins)' }}
        >
          Uma nova forma de salvar vidas!
        </p>
        <Link to="/cadastro">
          <button
            className="flex items-center justify-center h-[60px] w-[170px] font-medium text-white bg-[var(--primary-color-2)] rounded-[55px] text-[16px] mt-8 hover:bg-[var(--primary-color-4)] transition-colors"
            style={{ fontFamily: 'var(--btn-text-poppins)' }}
          >
            Cadastre-se
          </button>
        </Link>
      </div>
      <div className="flex justify-center items-center mt-8 md:mt-0">
        <img
          src={vectorHero}
          alt="HemoWeb Hero"
          className="object-contain md:object-contain h-64 w-64 md:h-72 md:w-72 lg:h-[350px] lg:w-[350px] self-center mb-0 transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
    </div>
  );
}

export default Hero;