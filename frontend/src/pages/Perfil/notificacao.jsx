import '../../App.css';
import { Link } from 'react-router-dom'; // Certifique-se de que o Link está importado corretamente

function Notificacao() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--light-background-color)]">
      <h1 className="text-[var(--primary-color-4)] text-[32px] font-bold mb-4">
        Página de Notificações
      </h1>
      <p className="text-[var(--black)] text-[16px]">
        Esta é a página de notificações.
      </p>
      <Link
        to="/perfil"
        className="mt-4 px-4 py-2 bg-[var(--primary-color-2)] text-[var(--white)] rounded-lg hover:bg-[var(--primary-color-2-hover)] transition-colors duration-300"
      >
        Voltar para o Perfil
      </Link>
    </div>
  );
}

export default Notificacao;