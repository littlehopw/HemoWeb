import vectorAbout from '../assets/vector-about.png';

function About() {
  return (
    <div
      id="about"
      className="max-w-full md:max-w-7xl mx-0 md:mx-auto bg-[var(--light-background-color)] rounded-none md:rounded-[40px] p-10 md:p-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 items-center mt-20"
    >
      <div className="flex justify-center">
        <img
          src={vectorAbout}
          alt="Sobre Nós"
          className="h-[315px] w-[324px] md:h-[378px] md:w-[388px] block mx-auto transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div>
        <h2
          className="font-bold text-[var(--primary-color-4)] mb-4 text-center md:text-left"
          style={{
            fontFamily: 'var(--menu-poppins)',
            fontSize: 'var(--h2-poppins)',
          }}
        >
          O que nós somos?
        </h2>
        <p
          className="font-normal text-[var(--black)] mt-4 text-[16px]"
          style={{ fontFamily: 'var(--paragraph-poppins)' }}
        >
          Somos uma plataforma digital dedicada a centralizar e organizar as informações dos doadores de sangue no Brasil.
          Nosso sistema visa substituir os métodos tradicionais, como telefonemas e listas impressas, por uma gestão moderna e eficiente.
          Com funcionalidades como agendamento online e notificações personalizadas, oferecemos aos usuários a possibilidade de se programar para a doação de forma prática e sem a necessidade de contato direto com os locais de doação, otimizando o processo.
        </p>
      </div>
    </div>
  );
}

export default About;