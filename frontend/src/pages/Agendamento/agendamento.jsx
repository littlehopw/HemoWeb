import '../../App.css';
import Sidebar from '../../components/Sidebar/sidebar.jsx';
import { FiEdit, FiTrash2, FiCheck } from 'react-icons/fi';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Agendamento() {
    const [abaSelecionada, setAbaSelecionada] = useState('andamento');

    const agendamentosEmAndamento = [
        {
            id: 1,
            data: '02/09/2024',
            hora: '12:00',
            local: 'Rua Barão de Cataguases, s/n - Bairro: Centro - Cep: 36015-370 (Juiz de Fora)'
        }
    ];

    const agendamentosConcluidos = [
        {
            id: 2,
            data: '01/06/2024',
            hora: '15:00',
            local: 'Rua Barão de Cataguases, s/n - Bairro: Centro - Cep: 36015-370 (Juiz de Fora)'
        }
    ];

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
                <div className="flex-1 flex flex-col items-center mt-[-3rem]">
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
                                        <FiTrash2 className="hover:text-red-600 cursor-pointer" size={18} />
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
