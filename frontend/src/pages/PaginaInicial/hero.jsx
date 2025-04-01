import { Link } from 'react-router-dom';
import vectorHero from '../../assets/vector-hero.png';

function Hero() {
  //COMENTÁRIO PARA NOVO COMMIT
  return (
    <div className="max-w-full md:max-w-[110%] lg:mx-10 mx-0 md:mx-auto bg-[var(--primary-color-1)] rounded-none md:rounded-[40px] flex flex-col md:flex-row justify-between pt-24 px-6 md:px-[10%]">
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
      <div className="flex justify-center items-center mt-10 md:mt-0">
        <img
          src={vectorHero}
          alt="HemoWeb Hero"
          className="object-contain md:object-contain h-[108%] w-[108%] md:h-[121.68%] md:w-[121.68%] lg:h-[591.5px] lg:w-[591.5px] self-center mb-0 transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
    </div>
  );
}

export default Hero;