import '../../App.css';
import Sidebar from '../../components/Sidebar/sidebar.jsx';
import { FiEdit, FiTrash2, FiCheck } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Agendamento() {
    const [abaSelecionada, setAbaSelecionada] = useState('andamento');
    const [agendamentosEmAndamento, setAgendamentosEmAndamento] = useState([]);
    const [agendamentosConcluidos, setAgendamentosConcluidos] = useState([]);

    const [modalConcluirAberto, setModalConcluirAberto] = useState(false);
    const [modalExcluirAberto, setModalExcluirAberto] = useState(false);
    const [agendamentoSelecionado, setAgendamentoSelecionado] = useState(null);

    useEffect(() => {
        async function fetchAgendamentos() {
            try {
                const response = await fetch('/api/agendamento', {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    },
                });

                if (!response.ok) {
                    console.error(await response.text());
                    throw new Error("Erro ao obter agendamentos.");
                }

                const todos = await response.json();
                setAgendamentosEmAndamento(todos.filter((ag) => ag.status_agendamento === "Pendente"));
                setAgendamentosConcluidos(todos.filter((ag) => ag.status_agendamento === "Concluído"));
            } catch (error) {
                console.error(error);
            }
        }

        fetchAgendamentos();
    }, []);

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
        <div className="flex">
            <Sidebar />
            <div className="bg-white min-h-screen flex-1 flex flex-col">
                <div className="relative bg-[#cfe8fc] h-40 flex items-center justify-center">
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
                                        <b>Local:</b> {item.hemocentro?.rua}, {item.hemocentro?.numero}, {item.hemocentro?.bairro}, {item.hemocentro?.cidade} - {item.hemocentro?.estado}
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
                <p className="text-gray-400 text-xs mt-10 mb-4 text-center">
                    &copy; 2025 HemoWeb. Todos os direitos reservados.
                </p>
            </div>
        </div>
    );
}

export default Agendamento;