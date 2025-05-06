import { useEffect, useState } from "react";
import '../../App.css';
import Sidebar from '../../components/Sidebar/sidebar.jsx';
import { atualizarPerfil } from '../../services/api';


function Perfil() {
    const [userData, setUserData] = useState({
        nome: "",
        email: "",
        senha: "",
        tipoSanguineo: "",
        medula: "",
        nascimento: ""
    });

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        try {
            const userFromStorage = localStorage.getItem("usuario");
            if (userFromStorage) {
                const user = JSON.parse(userFromStorage);
                setUserData({
                    nome: user.nome || "",
                    email: user.email || "",
                    tipoSanguineo: user.tipo_sanguineo || "",
                    medula: user.medula_ossea || "",
                    nascimento: user.data_nascimento ? user.data_nascimento.slice(0, 10) : ""
                });
            }
        } catch (error) {
            console.error("Erro ao carregar usuário do localStorage:", error);
        }
    }, []);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        const userFromStorage = localStorage.getItem("usuario");
        if (userFromStorage) {
            const user = JSON.parse(userFromStorage);
            setUserData({
                nome: user.nome || "",
                email: user.email || "",
                tipoSanguineo: user.tipo_sanguineo || "",
                medula: user.medula_ossea || "",
                nascimento: user.data_nascimento ? user.data_nascimento.slice(0, 10) : ""
            });
        }
        setIsEditing(false);
    };



    const handleSave = async () => {
        try {
            const dadosAtualizados = {
                email: userData.email,
                senha: userData.senha
            };

            const usuarioAtualizado = await atualizarPerfil(dadosAtualizados);
            setUserData((prev) => ({
                ...prev,
                email: usuarioAtualizado.email,
                senha: "" // limpa campo após salvar
            }));

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
                <div className="relative bg-[#cfe8fc] h-40 flex items-center justify-center">
                    <div className="absolute top-20">
                        <img
                            src="https://via.placeholder.com/150"
                            className="rounded-full border-4 border-white w-36 h-36 object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center w-full px-8 mt-24">
                    <div className="flex-1 space-y-4 w-full max-w-5xl">
                        <div className="flex justify-center">
                            <button
                                className="bg-blue-700 text-white font-bold py-2 px-6 rounded-full mb-8 hover:bg-blue-800 transition"
                                onClick={() => alert("Funcionalidade de alterar foto ainda não implementada.")}
                            >
                                Editar foto
                            </button>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Nome"
                                value={userData.nome}
                                onChange={(e) => setUserData({ ...userData, nome: e.target.value })}
                                disabled={!isEditing}
                                className="w-full p-3 border rounded placeholder-gray-400"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                value={userData.email}
                                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                disabled={!isEditing}
                                className="w-full p-3 border rounded placeholder-gray-400"
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="Nova senha"
                                value={userData.senha}
                                onChange={(e) => setUserData({ ...userData, senha: e.target.value })}
                                disabled={!isEditing}
                                className="w-full p-3 border rounded placeholder-gray-400"
                            />
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <input
                                type="date"
                                placeholder="Data de nascimento"
                                value={userData.nascimento}
                                onChange={(e) => setUserData({ ...userData, nascimento: e.target.value })}
                                disabled={!isEditing}
                                className="w-full p-3 border rounded placeholder-gray-400"
                            />
                            <input
                                type="text"
                                placeholder="sexo"
                                value={userData.notificacoes}
                                onChange={(e) => setUserData({ ...userData, sexo: e.target.value })}
                                disabled={!isEditing}
                                className="w-full p-3 border rounded placeholder-gray-400"
                            />
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
                                <span className="text-gray-700">Doação de Medula Óssea</span>
                            </label>

                            <select
                                value={userData.tipoSanguineo}
                                onChange={(e) => setUserData({ ...userData, tipoSanguineo: e.target.value })}
                                disabled={!isEditing}
                                className="w-full p-3 border rounded text-gray-700"
                            >
                                <option value="">Selecione o tipo sanguíneo</option>
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
