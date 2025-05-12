import { Link } from 'react-router-dom';
import vectorHero from '../../assets/vector-hero.png';

function Hero() {
  return (
    <div className="max-w-full md:max-w-[110%] lg:mx-10 mx-0 md:mx-auto bg-[var(--primary-color-1)] rounded-none md:rounded-[40px] flex flex-col md:flex-row justify-between pt-24 px-6 md:px-[10%] min-h-[500px] md:min-h-[550px] lg:min-h-[600px]">
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-[65px] text-[var(--primary-color-4)]" style={{ fontFamily: 'var(--h2-poppins)' }}>
          Bem-vindo ao HemoWeb
        </h1>
        <p
          className="font-normal text-[27px] text-[var(--black)] mt-10"
          style={{ fontFamily: 'var(--menu-poppins)' }}
        >
          Uma nova forma de salvar vidas!
        </p>
        <Link to="/cadastro">
          <button
            className="flex items-center justify-center h-[78px] w-[221px] font-medium text-white bg-[var(--primary-color-2)] rounded-[55px] text-[20px] mt-10 hover:bg-[var(--primary-color-4)] transition-colors"
            style={{ fontFamily: 'var(--btn-text-poppins)' }}
          >
            Cadastre-se
          </button>
        </Link>
      </div>
      <div className="flex justify-center items-end mt-10 md:mt-0">
        <img
          src={vectorHero}
          alt="HemoWeb Hero"
          className="object-contain h-auto w-auto max-h-[100%] max-w-[100%] md:max-h-[550px] md:max-w-[550px] lg:max-h-[600px] lg:max-w-[600px] self-end mb-0 transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
    </div>
  );
}

export default Hero;