import { useEffect, useState } from "react";
import '../../App.css';
import { atualizarPerfil } from '../../services/api';
import Sidebar from '../../components/Sidebar/sidebar.jsx';
import { useNavigate } from "react-router-dom";
import LogoutIcon from '../../assets/icons/logout.png';
import { toast } from 'react-hot-toast';

function Perfil() {
  const [userData, setUserData] = useState({
    nome: "",
    email: "",
    senha: "",
    tipoSanguineo: "",
    medula: false,
    nascimento: "",
    sexo: "",
    notificacoes: true,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [icones, setIcones] = useState([]);
  const [iconeSelecionado, setIconeSelecionado] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    navigate("/login");
  };

  useEffect(() => {
    async function carregarDados() {
      try {
        const userFromStorage = localStorage.getItem("usuario");
        if (userFromStorage) {
          const user = JSON.parse(userFromStorage);
          setUserData({
            nome: user.nome || "",
            email: user.email || "",
            tipoSanguineo: user.tipo_sanguineo || "",
            medula: user.medula_ossea || false,
            nascimento: user.data_nascimento ? user.data_nascimento.slice(0, 10) : "",
            sexo: user.sexo || "",
            notificacoes: user.notificacoes ?? true
          });
          if (user.icone_fk) {
            setIconeSelecionado(user.icone_fk);
          }
        }
        const token = localStorage.getItem("token");
        const res = await fetch("/api/icone", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        setIcones(data);
      } catch (error) {
        console.error("Erro ao carregar dados do perfil ou ícones:", error);
      }
    }
    carregarDados();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const handleEdit = () => setIsEditing(true);

  const handleCancel = () => {
    const userFromStorage = localStorage.getItem("usuario");
    if (userFromStorage) {
      const user = JSON.parse(userFromStorage);
      setUserData({
        nome: user.nome || "",
        email: user.email || "",
        tipoSanguineo: user.tipo_sanguineo || "",
        medula: user.medula_ossea || false,
        nascimento: user.data_nascimento ? user.data_nascimento.slice(0, 10) : "",
        sexo: user.sexo || ""
      });

      if (user.icone_fk) {
        setIconeSelecionado(user.icone_fk);
      }
    }
    setIsEditing(false);
  };

  const handleSave = async () => {
    try {
      const dadosAtualizados = {
        nome: userData.nome,
        email: userData.email,
        senha: userData.senha,
        tipo_sanguineo: userData.tipoSanguineo,
        medula_ossea: userData.medula,
        data_nascimento: userData.nascimento,
        sexo: userData.sexo,
        icone_fk: iconeSelecionado,
      };

      const usuarioAtualizado = await atualizarPerfil(dadosAtualizados);
      localStorage.setItem("usuario", JSON.stringify(usuarioAtualizado));

      setUserData((prev) => ({ ...prev, senha: "" }));
      setIsEditing(false);
      toast.success("Dados atualizados com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar:", error);
      toast.error("Erro ao salvar os dados.");
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden md:flex h-full">
        <Sidebar />
      </div>
      <div className="md:hidden fixed top-0 left-0 w-full bg-blue-900 h-16 flex items-center justify-between px-4 shadow-md z-10">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl focus:outline-none"
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-blue-900 text-white shadow-lg z-20">
          <ul className="flex flex-col p-4 space-y-4">
            <li><a href="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">Home</a></li>
            <li><a href="/perfil" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">Perfil</a></li>
            <li><a href="/notificacao" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">Notificações</a></li>
            <li><a href="/agendamento" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">Agendamento</a></li>
            <li><a href="/faq" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">FAQ</a></li>
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

      <div className="flex-1 flex flex-col bg-white min-h-screen">
        <div className="relative bg-[#cfe8fc] h-40 flex items-center justify-center w-full mt-16 md:mt-0" >
          <div className="flex flex-col items-center justify-center">
            <img
              src={icones.find((i) => i.id === iconeSelecionado)?.url || "https://via.placeholder.com/150"}
              alt="Ícone de perfil"
              className="rounded-full border-4 border-white w-36 h-36 object-cover mb-2 mt-4"
            />
            {isEditing && (
              <div className="flex flex-wrap gap-4 justify-center mt-4">
                {icones.map((icone) => (
                  <img
                    key={icone.id}
                    src={icone.url}
                    alt={`Ícone ${icone.id}`}
                    onClick={() => setIconeSelecionado(icone.id)}
                    className={`w-14 h-14 rounded-full cursor-pointer border-4 ${iconeSelecionado === icone.id ? "border-blue-700" : "border-transparent"} hover:opacity-80 transition`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center w-full px-8 mt-12 md:mt-10 flex-grow">
          <div className="flex-1 space-y-4 w-full max-w-5xl">
            <input
              type="text"
              placeholder="Nome"
              value={userData.nome}
              onChange={(e) => setUserData({ ...userData, nome: e.target.value })}
              disabled={!isEditing}
              className="w-full p-3 border rounded placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              disabled={!isEditing}
              className="w-full p-3 border rounded placeholder-gray-400"
            />
            <input
              type="password"
              placeholder="Nova senha"
              value={userData.senha}
              onChange={(e) => setUserData({ ...userData, senha: e.target.value })}
              disabled={!isEditing}
              className="w-full p-3 border rounded placeholder-gray-400"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="date"
                value={userData.nascimento}
                onChange={(e) => setUserData({ ...userData, nascimento: e.target.value })}
                disabled={!isEditing}
                className="w-full p-3 border rounded text-gray-700"
              />
              <select
                value={userData.sexo}
                onChange={(e) => setUserData({ ...userData, sexo: e.target.value })}
                disabled={!isEditing}
                className="w-full p-3 border rounded text-gray-700"
              >
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={userData.medula}
                  onChange={(e) => setUserData({ ...userData, medula: e.target.checked })}
                  disabled={!isEditing}
                  className="h-5 w-5"
                />
                <span className="text-gray-700">Doador de Medula Óssea</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={userData.notificacoes}
                  onChange={(e) => setUserData({ ...userData, notificacoes: e.target.checked })}
                  disabled={!isEditing}
                  className="h-5 w-5"
                />
                <span className="text-gray-700">Receber notificações por e-mail</span>
              </label>
              <select
                value={userData.tipoSanguineo}
                onChange={(e) => setUserData({ ...userData, tipoSanguineo: e.target.value })}
                disabled={!isEditing}
                className="w-full p-3 border rounded text-gray-700"
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="flex flex-col md:flex-row gap-16 mt-8 justify-center">
              {isEditing ? (
                <>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-500 text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSave}
                    className="bg-blue-700 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-800 transition"
                  >
                    Salvar
                  </button>
                </>
              ) : (
                <button
                  onClick={handleEdit}
                  className="bg-blue-700 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-800 transition"
                >
                  Editar
                </button>
              )}
            </div>
          </div>
        </div>
        <p className="text-gray-400 text-xs mt-10 mb-4 text-center">
          &copy; 2025 HemoWeb. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}

export default Perfil;
