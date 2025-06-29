import Sidebar from '../../components/Sidebar/sidebar.jsx';
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate, useParams } from 'react-router-dom';
import Select from 'react-select';

function NovoAgendamento() {
    const [data, setData] = useState(new Date());
    const [hora, setHora] = useState('');
    const [hemocentroId, setHemocentroId] = useState('');
    const [hemocentros, setHemocentros] = useState([]);
    const { id } = useParams();
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        async function fetchHemocentros() {
            const res = await fetch("/api/hemocentros", {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            const data = await res.json();
            setHemocentros(data);
        }

        async function fetchAgendamento() {
            if (!id) return;
            const res = await fetch(`/api/agendamento/${id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            const agendamento = await res.json();
            setData(new Date(agendamento.data_agendamento));
            const horaFormatada = new Date(agendamento.horario_agendamento).toISOString().slice(11, 16);
            setHora(horaFormatada);
            setHemocentroId(agendamento.hemocentro_fk.toString());
        }

        fetchHemocentros();
        fetchAgendamento();
    }, [id]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuOpen]);

    const handleCancelar = () => navigate('/agendamento');

    const handleConfirmar = async () => {
        if (!hora || !hemocentroId) {
            alert('Preencha todos os campos!');
            return;
        }

        const agendamento = {
            usuario_fk: usuario.id,
            data_agendamento: data.toISOString(),
            horario_agendamento: new Date(`1970-01-01T${hora}:00Z`),
            hemocentro_fk: parseInt(hemocentroId)
        };

        const url = id ? `/api/agendamento/${id}` : "/api/agendamento";
        const method = id ? "PUT" : "POST";

        const res = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(agendamento)
        });

        if (res.ok) {
            alert(`Agendamento ${id ? 'atualizado' : 'criado'} com sucesso!`);
            navigate('/agendamento');
        } else {
            alert("Erro ao salvar o agendamento.");
        }
    };

    const hemocentroOptions = hemocentros.map((h) => ({
        value: h.id,
        label: `${h.rua} - ${h.bairro} (${h.cidade} - ${h.estado})`,
    }));

    const selectedHemocentro = hemocentroOptions.find((option) => option.value === parseInt(hemocentroId));

    return (
        <div className="flex">
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

            {/* Dropdown menu mobile */}
            {menuOpen && (
                <div className="md:hidden fixed top-16 left-0 w-full bg-blue-900 text-white shadow-lg z-20">
                    <ul className="flex flex-col p-4 space-y-4">
                        <li><a href="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">Home</a></li>
                        <li><a href="/perfil" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">Perfil</a></li>
                        <li><a href="/notificacao" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">Notificações</a></li>
                        <li><a href="/agendamento" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">Agendamento</a></li>
                        <li><a href="/faq" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">FAQ</a></li>
                    </ul>
                </div>
            )}

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
                    />
                    <Select
                        className="mt-4 w-80 text-sm"
                        options={hemocentroOptions}
                        value={selectedHemocentro}
                        onChange={(selectedOption) => setHemocentroId(selectedOption?.value)}
                        placeholder="Selecione um Hemocentro"
                        isSearchable
                    />
                    <div className="flex gap-4 mt-6">
                        <button onClick={handleConfirmar} className="bg-[#007bff] text-white px-6 py-2 rounded-full hover:bg-blue-700">
                            {id ? 'Atualizar' : 'Confirmar'}
                        </button>
                        <button onClick={handleCancelar} className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">
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
