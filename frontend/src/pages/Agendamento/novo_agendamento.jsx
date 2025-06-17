import('../../App.css');
import Sidebar from '../../components/Sidebar/sidebar.jsx';
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

function NovoAgendamento() {
    const [data, setData] = useState(new Date()); // data do agendamento
    const [hora, setHora] = useState('');
    const [hemocentroId, setHemocentroId] = useState('');
    const [hemocentros, setHemocentros] = useState([]);

    const navigate = useNavigate();

    // Busca a lista de Hemocentros na API
    useEffect(() => {
        async function fetchHemocentros() {
            try {
                const response = await fetch("http://localhost:5000/hemocentros", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setHemocentros(data);
                } else {
                    console.error("Erro ao obter a lista de Hemocentros.");
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchHemocentros();
    }, []);

    const handleCancelar = () => {
        navigate('/agendamento');
    };

    const handleConfirmar = async () => {
        if (!hora || !hemocentroId) {
            alert('Preencha todos os campos antes de confirmar.');
            return;
        }

        try {
            // Pegue o usuário atual do localStorage ou do contexto
            // (dependendo de como você faz a autenticação)
            const usuario = JSON.parse(localStorage.getItem("usuario"));
            if (!usuario) {
                alert("Usuário não autenticado.");
                return;
            }

            const agendamento = {
                usuario_fk: usuario.id,
                data_agendamento: data.toISOString(), 
                horario_agendamento: new Date(`1970-01-01T${hora}:00Z`),
                hemocentro_fk: parseInt(hemocentroId)
            };

            const response = await fetch("http://localhost:5000/agendamento", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(agendamento)
            });

            if (response.ok) {
                alert("Agendamento criado!");
                navigate('/agendamento'); // vá pra a lista
            } else {
                const error = await response.json();
                console.error(error);
                alert("Erro ao criar agendamento.");
            }
        } catch (error) {
            console.error(error);
            alert("Erro na comunicação com o servidor.");
        }
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 bg-white min-h-screen relative">
                <div className="bg-[#cfe8fc] h-40 flex items-center justify-center" />
                <div className="flex flex-col items-center justify-center mt-[-80px]">
                    <div className="bg-white rounded-xl shadow-md p-6 w-80 text-center">
                        <h2 className="text-lg font-semibold mb-4">Selecione o dia</h2>
                        <DatePicker
                            selected={data}
                            onChange={(date) => setData(date)}
                            inline
                            calendarStartDay={1}
                            locale="pt-BR"
                            dateFormat="dd/MM/yyyy"
                            minDate={new Date()}
                        />
                    </div>
                    <input
                        type="time"
                        className="mt-6 border border-gray-300 rounded-md px-4 py-2 w-80"
                        value={hora}
                        onChange={(e) => setHora(e.target.value)}
                        placeholder="Horário"
                    />

                    <select
                        className="mt-4 border border-gray-300 rounded-md px-4 py-2 w-80"
                        value={hemocentroId}
                        onChange={(e) => setHemocentroId(e.target.value)}
                    >
                        <option value="">Selecione um Hemocentro</option>
                        {hemocentros.map((hemocentro) => (
                            <option key={hemocentro.id} value={hemocentro.id}>
                                {hemocentro.rua} - {hemocentro.bairro}
                            </option>
                        ))}
                    </select>

                    <div className="flex gap-4 mt-6">
                        <button
                            onClick={handleConfirmar}
                            className="bg-[#007bff] text-white px-6 py-2 rounded-full hover:bg-blue-700">
                            Confirmar
                        </button>
                        <button
                            onClick={handleCancelar}
                            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">
                            Cancelar
                        </button>
                    </div>
                </div>
                <p className="text-gray-500 text-sm text-center absolute bottom-2 w-full">
                    &copy; 2025 Todos os direitos reservados. HemoWeb
                </p>
            </div>
        </div>
    );
}

export default NovoAgendamento;
