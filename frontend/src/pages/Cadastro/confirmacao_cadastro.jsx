import '../../App.css';
import hemowebLogo from '../../assets/hemoweb-logo.png';
import ConfirmacaoCadastroBox from '../../components/cadastro-login/box_confirmacao_cadastro.jsx';

function ConfirmacaoCadastro() {
  return (
    <>
      <div className="bg-gradient-to-br from-[var(--primary-color-1)] to-white">
        <header className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-2">
            <img src={hemowebLogo} alt="HemoWeb Logo" className="h-20 w-auto" />
          </div>
        </header>
        <div className="cadastro-container min-h-screen w-full flex flex-col justify-center items-center relative">
          <ConfirmacaoCadastroBox />
          <p className="text-gray-500 text-sm text-center absolute bottom-2">
            &copy; 2025 HemoWeb. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </>
  );
}

export default ConfirmacaoCadastro;