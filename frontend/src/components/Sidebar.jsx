import React from 'react';
import logo from '../assets/hemowweb-logo-blackwhite.png'; // Importando a logo
import HomeIcon from '../assets/icons/perfil.svg'; // Ícone do Home
import NotificationIcon from '../assets/icons/notificacoes.svg'; // Ícone de Notificações
import HistoryIcon from '../assets/icons/historico.svg'; // Ícone de Histórico
import CalendarIcon from '../assets/icons/agendamento.svg'; // Ícone de Agendamento
import FAQIcon from '../assets/icons/faq.svg'; // Ícone de FAQ

function Sidebar() {
    return (
        <div className="bg-blue-900 text-white w-20 md:w-40 min-h-screen flex flex-col justify-between items-center py-10">
            <div>
                <div className="mb-20">
                    <img src={logo} alt="HemoWeb Logo" className="w-22 md:w-30" />
                </div>
                <nav className="flex flex-col space-y-16 w-full">
                    <a href="/perfil" className="flex flex-col items-center">
                        <img src={HomeIcon} alt="Home" className="w-8 h-8" />
                        <span className="hidden md:block text-sm mt-1">Perfil</span>
                    </a>
                    <a href="/notificacoes" className="flex flex-col items-center">
                        <img src={NotificationIcon} alt="Notificações" className="w-8 h-8" />
                        <span className="hidden md:block text-sm mt-1">Notificações</span>
                    </a>
                    <a href="/historico" className="flex flex-col items-center">
                        <img src={HistoryIcon} alt="Histórico" className="w-8 h-8" />
                        <span className="hidden md:block text-sm mt-1">Histórico</span>
                    </a>
                    <a href="/agendamento" className="flex flex-col items-center">
                        <img src={CalendarIcon} alt="Agendamento" className="w-8 h-8" />
                        <span className="hidden md:block text-sm mt-1">Agendamento</span>
                    </a>
                </nav>
            </div>
            {/* FAQ no final */}
            <a href="/faq" className="flex flex-col items-center">
                <img src={FAQIcon} alt="FAQ" className="w-8 h-8" />
                <span className="hidden md:block text-sm mt-1">FAQ</span>
            </a>
        </div>
    );
}

export default Sidebar;