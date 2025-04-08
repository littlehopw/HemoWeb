import '../../App.css';
import hemowebLogo from '../../assets/hemoweb-logo.png';
import CadastroBox from '../../components/box_cadastro.jsx';

function Cadastro() {
  return (
    <>
      <div className="cadastro-container min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-[var(--primary-color-1)] to-white bg-fixed">
        <CadastroBox />
      </div>
    </>
  );
}

export default Cadastro;