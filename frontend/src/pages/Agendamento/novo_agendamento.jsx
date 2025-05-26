/*import '../../App.css';
import Sidebar from '../../components/Sidebar/sidebar.jsx';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

function NovoAgendamento() {
    const [data, setData] = useState(new Date());
    const [hora, setHora] = useState('');
    const [local, setLocal] = useState('');
    const navigate = useNavigate();

    const handleCancelar = () => {
        navigate('/agendamento');
    };

    const handleConfirmar = () => {
        console.log('Data:', data);
        console.log('Hora:', hora);
        console.log('Local:', local);
        navigate('/agendamento');
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
                        />
                    </div>
                    <input
                        type="time"
                        className="mt-6 border border-gray-300 rounded-md px-4 py-2 w-80"
                        value={hora}
                        onChange={(e) => setHora(e.target.value)}
                        placeholder="Horário"
                    />
                    <input
                        type="text"
                        className="mt-4 border border-gray-300 rounded-md px-4 py-2 w-80"
                        placeholder="Local"
                        value={local}
                        onChange={(e) => setLocal(e.target.value)}
                    />
                    <div className="flex gap-4 mt-6">
                        <button
                            onClick={handleConfirmar}
                            className="bg-[#007bff] text-white px-6 py-2 rounded-full hover:bg-blue-700"
                        >
                            Confirmar
                        </button>
                        <button
                            onClick={handleCancelar}
                            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700"
                        >
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

export default NovoAgendamento;*/
