import "../../App.css";
import Sidebar from "../../components/Sidebar/sidebar.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '../../assets/icons/logout.png';
import { useNotificacoes } from '../../context/notificacao_contexto.jsx';

function Mensagem({ titulo, conteudo }) {
  return (
    <div className="flex items-start bg-white p-4 shadow rounded-lg w-[70%] mx-auto hover:bg-gray-100 transition-colors">
      <div>
        <p
          className="font-bold text-black"
          style={{
            fontFamily: "var(--menu-poppins)",
            fontWeight: "bold",
            fontSize: "18px",
            lineHeight: "28px",
          }}
        >
          {titulo}
        </p>
        <p
          className="text-gray-600"
          style={{
            fontFamily: "var(--paragraph-poppins)",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "24px",
          }}
        >
          {conteudo}
        </p>
      </div>
    </div>
  );
}

function Notificacao() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [abaAtiva, setAbaAtiva] = useState("novas");
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { notificacoes, notificacoesNovas, marcarTodasComoLidas } = useNotificacoes();
  const [showExcluirModal, setShowExcluirModal] = useState(false);

  const mensagensExibidas = abaAtiva === "novas"
    ? notificacoesNovas
    : notificacoes.filter(n => n.status === true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    navigate("/login");
  };

  const deletarTodasNotificacoesDoUsuario = async () => {
    const token = localStorage.getItem("token");
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (!token || !usuario) return;

    try {
      await fetch(`/api/notificacao/usuario/${usuario.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (typeof window !== "undefined" && window.location) {
        window.location.reload();
      }
    } catch (error) {
      console.error("Erro ao deletar notificações:", error);
    }
  };

  return (
    <div className="flex min-h-screen">
      {" "}
      {/* Altura mínima 100vh para o container principal */}
      {/* Sidebar desktop com altura total da tela */}
      <div className="hidden md:block h-max">
        <Sidebar />
      </div>
      {/* Menu mobile fixo no topo */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-blue-900 h-16 flex items-center justify-between px-4 shadow-md z-10">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl focus:outline-none"
          aria-label="Abrir menu"
        >
          ☰
        </button>
        <div className="flex items-center"></div>
      </div>
      {menuOpen && (
        <div className="fixed top-16 left-0 w-full bg-blue-900 text-white shadow-lg z-20">
          <ul className="flex flex-col p-4 space-y-4">
            <li>
              <a href="/" className="hover:text-blue-300 cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a href="/perfil" className="hover:text-blue-300 cursor-pointer">
                Perfil
              </a>
            </li>
            <li>
              <a
                href="/notificacao"
                className="hover:text-blue-300 cursor-pointer"
              >
                Notificações
              </a>
            </li>
            <li>
              <a
                href="/agendamento"
                className="hover:text-blue-300 cursor-pointer"
              >
                Agendamento
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-blue-300 cursor-pointer">
                FAQ
              </a>
            </li>
            <li>
              <button src={LogoutIcon}
                onClick={() => {
                  setMenuOpen(false);
                  setShowLogoutModal(true);
                }}
                className="text-left w-full hover:text-blue-300"
              >
                Sair
              </button>
            </li>
          </ul>
        </div>
      )}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Deseja realmente sair?</h2>
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
              >
                Cancelar
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Conteúdo principal */}
      <div className="bg-white min-h-screen flex-1 flex flex-col">
        <div className="relative bg-white md:bg-[#cfe8fc] h-40 flex items-center justify-center w-full mt-12 md:mt-0">
          <h1
            className="text-blue-900 font-bold"
            style={{
              fontFamily: "var(--menu-poppins)",
              fontSize: "2rem",
              lineHeight: "2.5rem",
            }}
          >
            Notificações
          </h1>
        </div>
        <div className="flex flex-col items-center w-full px-4 mt-1 md:mt-10 flex-grow relative">
          <div className="flex gap-4 mb-4 border-b w-[70%] mx-auto">
            <button
              onClick={() => setAbaAtiva("novas")}
              className={`pb-2 ${abaAtiva === "novas"
                ? "border-b-2 border-blue-600 text-blue-600 font-bold"
                : "text-gray-500 hover:text-blue-600"
                }`}
            >
              Novas
            </button>
            <button
              onClick={() => setAbaAtiva("lidas")}
              className={`pb-2 ${abaAtiva === "lidas"
                ? "border-b-2 border-blue-600 text-blue-600 font-bold"
                : "text-gray-500 hover:text-blue-600"
                }`}
            >
              Lidas
            </button>
          </div>
          <div className="space-y-4 w-full h-[50vh] md:h-64 overflow-y-auto">
            {mensagensExibidas.map((mensagem, index) => (
              <Mensagem
                key={index}
                titulo={mensagem.titulo}
                conteudo={mensagem.mensagem}
              />
            ))}
          </div>

          {/* Botões agora abaixo dos cards */}
          <div className="flex flex-wrap gap-6 justify-center mt-14 mb-4">
            <button
              onClick={marcarTodasComoLidas}
              className="bg-blue-600 text-white px-6 py-2 h-12 rounded-full hover:opacity-90"
            >
              Ler tudo
            </button>
            <button
              onClick={() => setShowExcluirModal(true)}
              className="bg-red-600 text-white px-6 py-2 h-12 rounded-full hover:opacity-90"
            >
              Excluir tudo
            </button>
          </div>
          {showExcluirModal && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
                <h2 className="text-lg font-semibold mb-4 text-gray-800">Deseja excluir todas as notificações?</h2>
                <div className="flex justify-center gap-4 mt-4">
                  <button
                    onClick={() => setShowExcluirModal(false)}
                    className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={async () => {
                      await deletarTodasNotificacoesDoUsuario();
                      setShowExcluirModal(false);
                    }}
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* Footer */}
          <p className="text-gray-400 text-xs mt-10 mb-4 text-center w-full">
            &copy; 2025 HemoWeb. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Notificacao;
