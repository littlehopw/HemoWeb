import { useEffect, useState } from "react";
import '../../App.css';
import { atualizarPerfil } from '../../services/api';
import Sidebar from '../../components/Sidebar/sidebar.jsx';

function Perfil() {
  const [userData, setUserData] = useState({
    nome: "",
    email: "",
    senha: "",
    tipoSanguineo: "",
    medula: false,
    nascimento: "",
    sexo: ""
  });

  const [isEditing, setIsEditing] = useState(false);
  const [icones, setIcones] = useState([]);
  const [iconeSelecionado, setIconeSelecionado] = useState(null);

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
            sexo: user.sexo || ""
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
      alert("Dados atualizados com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert("Erro ao salvar os dados.");
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-white min-h-screen flex-1 flex flex-col">
        <div className="relative bg-[#cfe8fc] h-56 flex items-center justify-center">
          <div className="absolute top-20 flex flex-col items-center">
            <img
              src={
                icones.find((i) => i.id === iconeSelecionado)?.url ||
                "https://via.placeholder.com/150"
              }
              alt="Ícone de perfil"
              className="rounded-full border-4 border-white w-36 h-36 object-cover mb-2"
            />

            {isEditing && (
              <div className="flex flex-wrap gap-4 justify-center mt-4">
                {icones.map((icone) => (
                  <img
                    key={icone.id}
                    src={icone.url}
                    alt={`Ícone ${icone.id}`}
                    onClick={() => setIconeSelecionado(icone.id)}
                    className={`w-14 h-14 rounded-full cursor-pointer border-4 ${
                      iconeSelecionado === icone.id
                        ? "border-blue-700"
                        : "border-transparent"
                    } hover:opacity-80 transition`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center w-full px-8 mt-24">
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
      </div>
    </div>
  );
}

export default Perfil;
