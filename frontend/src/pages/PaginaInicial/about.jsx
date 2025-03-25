import '../../App.css';
import vectorAbout from '../../assets/vector-about.png';

function About() {
  return (
    <div id="about" className="about-container"> {/* Adicionado o ID "about" */}
      <div>
        <img src={vectorAbout} alt="Sobre Nós" className="about-image" />
      </div>
      <div>
        <h2>O que nós somos?</h2>
        <p>
          Somos uma plataforma digital dedicada a centralizar e organizar as informações dos doadores de sangue no Brasil.
          Nosso sistema visa substituir os métodos tradicionais, como telefonemas e listas impressas, por uma gestão moderna e eficiente.
          Com funcionalidades como agendamento online e notificações personalizadas, oferecemos aos usuários a possibilidade de se programar para a doação de forma prática e sem a necessidade de contato direto com os locais de doação, otimizando o processo.
        </p>
      </div>
    </div>
  );
}

export default About;