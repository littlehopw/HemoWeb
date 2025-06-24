import '../../App.css';
import hemowebLogo from '../../assets/hemoweb-logo.png';
import LoginBox from '../../components/CadastroLogin/box_login.jsx';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <div className="bg-gradient-to-br from-[var(--primary-color-1)] to-white">
        <header className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-2">
            {/* Agora o logo é um Link que navega para "/" */}
            <Link to="/">
              <img src={hemowebLogo} alt="HemoWeb Logo" className="h-20 w-auto" />
            </Link>
          </div>
          <div>
            {/* Texto visível apenas em telas >= sm */}
            <span className="text-gray-700 mr-2 hidden sm:inline">Ainda não tem uma conta?</span>
            <Link to="/cadastro" className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-800 transition ml-4 sm:ml-0">
              Cadastre-se
            </Link>
          </div>
        </header>
        <div className="cadastro-container min-h-screen w-full flex flex-col justify-center items-center relative">
          <LoginBox />
          <p className="text-gray-500 text-sm text-center absolute bottom-2">
            &copy; 2025 HemoWeb. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
