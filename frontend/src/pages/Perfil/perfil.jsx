import '../../App.css';
import Sidebar from '../../components/Sidebar/sidebar.jsx';

function Perfil() {
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
                            <button className="bg-blue-700 text-white font-bold py-2 px-6 rounded-full mb-8 hover:bg-blue-800 transition">
                                Editar foto
                            </button>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Nome"
                                disabled
                                className="w-full p-3 border rounded placeholder-gray-400"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 border rounded placeholder-gray-400"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Senha"
                                className="w-full p-3 border rounded placeholder-gray-400"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Medula óssea"
                                className="w-full p-3 border rounded placeholder-gray-400"
                            />
                            <input
                                type="text"
                                placeholder="Tipo sanguíneo"
                                className="w-full p-3 border rounded placeholder-gray-400"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Data de nascimento"
                                className="w-full p-3 border rounded placeholder-gray-400"
                            />

                        </div>
                        <div className="flex flex-col md:flex-row gap-16 mt-8 justify-center">
                            <button className="bg-[var(--primary-color-2)] text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition">
                                Cancelar
                            </button>
                            <button className="bg-blue-700 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-800 transition">
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Perfil;