import '../../App.css';
import Sidebar from '../../components/Sidebar/sidebar.jsx';
import { FiEdit, FiTrash2, FiCheck } from 'react-icons/fi';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Agendamento() {
    const [abaSelecionada, setAbaSelecionada] = useState('andamento');
    const [agendamentosEmAndamento, setAgendamentosEmAndamento] = useState([]);
    const [agendamentosConcluidos, setAgendamentosConcluidos] = useState([]);

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('agendamentos')) || [];
        const hoje = new Date();
        const emAndamento = [];
        const concluidos = [];

        todos.forEach((ag) => {
            const [dia, mes, ano] = ag.data.split('/');
            const dataAg = new Date(`${ano}-${mes}-${dia}`);
            if (dataAg >= hoje) {
                emAndamento.push(ag);
            } else {
                concluidos.push(ag);
            }
        });

        setAgendamentosEmAndamento(emAndamento);
        setAgendamentosConcluidos(concluidos);
    }, []);

    const handleExcluir = (id) => {
        const todos = JSON.parse(localStorage.getItem('agendamentos')) || [];
        const atualizados = todos.filter((ag) => ag.id !== id);
        localStorage.setItem('agendamentos', JSON.stringify(atualizados));
        window.location.reload();
    };


    return (
        <div className="flex">
            <Sidebar />
            <div className="bg-white min-h-screen flex-1 flex flex-col">
                <div className="relative bg-[#cfe8fc] h-40 flex items-center justify-center">
                    <div className="absolute top-8 flex gap-10">
                        <button
                            onClick={() => setAbaSelecionada('andamento')}
                            className={`font-semibold ${abaSelecionada === 'andamento' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-500'
                                }`}
                        >
                            Em andamento
                        </button>
                        <button
                            onClick={() => setAbaSelecionada('concluidas')}
                            className={`font-semibold ${abaSelecionada === 'concluidas' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-500'
                                }`}
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
                                    <h2 className="text-base font-bold mb-2">Doação</h2>
                                    <p className="text-sm text-gray-700">
                                        <b>Dia:</b> {item.data}<br />
                                        <b>Horário:</b> {item.hora}<br />
                                        <b>Local:</b> {item.local}
                                    </p>
                                </div>
                                {abaSelecionada === 'andamento' ? (
                                    <div className="flex gap-3 text-gray-500 mt-1">
                                        <FiEdit className="hover:text-blue-600 cursor-pointer" size={18} />
                                        <FiTrash2
                                            className="hover:text-red-600 cursor-pointer"
                                            size={18}
                                            onClick={() => handleExcluir(item.id)}
                                        />
                                    </div>
                                ) : (
                                    <FiCheck className="text-blue-600 mt-1" size={20} />
                                )}
                            </div>
                        </div>
                    ))}
                    <Link to="/novo_agendamento" className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-800 transition">Novo agendamento</Link>
                </div>
                <p className="text-gray-400 text-xs mt-10 mb-4 text-center">
                    &copy; 2025 HemoWeb. Todos os direitos reservados.
                </p>
            </div>
        </div>
    );
}

export default Agendamento;
