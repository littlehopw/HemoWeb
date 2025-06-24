import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/hemowweb-logo-blackwhite.png';
import HomeIcon from '../../assets/icons/perfil.svg';
import NotificationIcon from '../../assets/icons/notificacoes.svg';
import CalendarIcon from '../../assets/icons/agendamento.svg';
import FAQIcon from '../../assets/icons/faq.svg';

function Sidebar() {
    return (
        <div className="bg-blue-900 text-white w-20 md:w-40 min-h-screen flex flex-col items-center py-10">
            <div>
                <div className="mb-20">
                    <Link to="/">
                        <img src={logo} alt="HemoWeb Logo" className="w-20 md:w-32" />
                    </Link>
                </div>
                <nav className="flex flex-col space-y-16 w-full items-center">
                    <Link to="/perfil" className="flex flex-col items-center">
                        <img src={HomeIcon} alt="Home" className="w-8 h-8" />
                        <span className="hidden md:block text-sm mt-1">Perfil</span>
                    </Link>
                    <Link to="/notificacao" className="flex flex-col items-center">
                        <img src={NotificationIcon} alt="Notificações" className="w-8 h-8" />
                        <span className="hidden md:block text-sm mt-1">Notificações</span>
                    </Link>
                    <Link to="/agendamento" className="flex flex-col items-center">
                        <img src={CalendarIcon} alt="Agendamento" className="w-8 h-8" />
                        <span className="hidden md:block text-sm mt-1">Agendamento</span>
                    </Link>
                    <Link to="/faq" className="flex flex-col items-center">
                        <img src={FAQIcon} alt="FAQ" className="w-8 h-8" />
                        <span className="hidden md:block text-sm mt-1">FAQ</span>
                    </Link>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;
