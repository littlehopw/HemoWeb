import '../../App.css';
import Sidebar from '../../components/Sidebar/sidebar.jsx';
import { FiEdit, FiTrash2, FiCheck } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import LogoutIcon from '../../assets/icons/logout.png';

function Agendamento() {
  const [abaSelecionada, setAbaSelecionada] = useState('andamento');
  const [agendamentosEmAndamento, setAgendamentosEmAndamento] = useState([]);
  const [agendamentosConcluidos, setAgendamentosConcluidos] = useState([]);
  const [modalConcluirAberto, setModalConcluirAberto] = useState(false);
  const [modalExcluirAberto, setModalExcluirAberto] = useState(false);
  const [agendamentoSelecionado, setAgendamentoSelecionado] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    navigate("/login");
  };

  useEffect(() => {
    async function fetchAgendamentos() {
      try {
        const response = await fetch('/api/agendamento', {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
        });

        if (!response.ok) throw new Error("Erro ao obter agendamentos.");

        const todos = await response.json();
        setAgendamentosEmAndamento(todos.filter((ag) => ag.status_agendamento === "Pendente"));
        setAgendamentosConcluidos(todos.filter((ag) => ag.status_agendamento === "Concluído"));
      } catch (error) {
        console.error(error);
      }
    }

    fetchAgendamentos();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const abrirModalConcluir = (agendamento) => {
    setAgendamentoSelecionado(agendamento);
    setModalConcluirAberto(true);
  };

  const abrirModalExcluir = (agendamento) => {
    setAgendamentoSelecionado(agendamento);
    setModalExcluirAberto(true);
  };

  const handleConcluir = async () => {
    try {
      const id = agendamentoSelecionado.id;
      const response = await fetch(`/api/agendamento/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({ status_agendamento: "Concluído" })
      });

      if (!response.ok) throw new Error("Erro ao concluir agendamento.");

      setAgendamentosEmAndamento(prev => prev.filter(ag => ag.id !== id));
      setAgendamentosConcluidos(prev => [...prev, { ...agendamentoSelecionado, status_agendamento: "Concluído" }]);

      setModalConcluirAberto(false);
      setAgendamentoSelecionado(null);
    } catch (error) {
      console.error(error);
      alert("Erro ao concluir o agendamento.");
    }
  };

  const handleExcluir = async () => {
    try {
      const id = agendamentoSelecionado.id;
      await fetch(`/api/agendamento/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });

      setAgendamentosEmAndamento(prev => prev.filter(ag => ag.id !== id));
      setAgendamentosConcluidos(prev => prev.filter(ag => ag.id !== id));

      setModalExcluirAberto(false);
      setAgendamentoSelecionado(null);
    } catch (err) {
      console.error("Erro ao excluir o agendamento:", err);
      alert("Erro ao excluir o agendamento.");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Menu mobile fixo */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-blue-900 h-16 flex items-center justify-between px-4 shadow-md z-10">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl focus:outline-none"
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>

      {/* Menu dropdown mobile */}
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-blue-900 text-white shadow-lg z-20">
          <ul className="flex flex-col p-4 space-y-4">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/perfil" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">
                Perfil
              </Link>
            </li>
            <li>
              <Link to="/notificacao" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">
                Notificações
              </Link>
            </li>
            <li>
              <Link to="/agendamento" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">
                Agendamento
              </Link>
            </li>
            <li>
              <Link to="/faq" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">
                FAQ
              </Link>
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
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Deseja sair da sua conta?</h2>
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

      <div className="bg-white min-h-screen flex-1 flex flex-col">
        <div className="relative bg-[#cfe8fc] h-40 flex items-center justify-center mt-14 md:mt-0">
          <div className="absolute top-8 flex gap-10">
            <button
              onClick={() => setAbaSelecionada('andamento')}
              className={`font-semibold ${abaSelecionada === 'andamento' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-500'}`}
            >
              Em andamento
            </button>
            <button
              onClick={() => setAbaSelecionada('concluidas')}
              className={`font-semibold ${abaSelecionada === 'concluidas' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-500'}`}
            >
              Concluídas
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center mt-4">
          {(abaSelecionada === 'andamento' ? agendamentosEmAndamento : agendamentosConcluidos).map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md p-5 w-full max-w-2xl relative mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-base font-semibold mb-2">Doação</h2>
                  <p className="text-sm text-gray-700">
                    <b>Dia:</b> {new Date(item.data_agendamento).toLocaleDateString()}<br />
                    <b>Horário:</b> {new Date(item.data_agendamento).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}<br />
                    <b>Local:</b> {item.hemocentro?.rua}, {item.hemocentro?.bairro}, {item.hemocentro?.cidade} - {item.hemocentro?.estado}
                  </p>
                </div>
                {abaSelecionada === 'andamento' ? (
                  <div className="flex gap-3 text-gray-500 mt-1">
                    <Link to={`/editar_agendamento/${item.id}`}>
                      <FiEdit size={18} className="hover:text-blue-600 cursor-pointer" />
                    </Link>
                    <FiTrash2
                      size={18}
                      className="hover:text-red-600 cursor-pointer"
                      onClick={() => abrirModalExcluir(item)}
                    />
                    <FiCheck
                      size={20}
                      className="hover:text-green-600 cursor-pointer"
                      onClick={() => abrirModalConcluir(item)}
                    />
                  </div>
                ) : (
                  <FiCheck size={20} className="text-blue-600 mt-1" />
                )}
              </div>
            </div>
          ))}
          <Link to="/novo_agendamento" className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-800 transition">
            Novo agendamento
          </Link>
        </div>

        {/* Modal concluir */}
        {modalConcluirAberto && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
              <p>Deseja marcar este agendamento como <b>concluído</b>?</p>
              <div className="flex justify-center gap-4 mt-6">
                <button onClick={handleConcluir} className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
                  Sim
                </button>
                <button onClick={() => setModalConcluirAberto(false)} className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal excluir */}
        {modalExcluirAberto && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
              <p>Tem certeza que deseja <b>excluir</b> este agendamento?</p>
              <div className="flex justify-center gap-4 mt-6">
                <button onClick={handleExcluir} className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition">
                  Sim, excluir
                </button>
                <button onClick={() => setModalExcluirAberto(false)} className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <p className="text-gray-400 text-xs mt-10 mb-4 text-center">
          &copy; 2025 HemoWeb. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}

export default Agendamento;
