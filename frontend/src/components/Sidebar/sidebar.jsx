import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/hemowweb-logo-blackwhite.png';
import HomeIcon from '../../assets/icons/perfil.svg';
import NotificationIcon from '../../assets/icons/notificacoes.svg';
import CalendarIcon from '../../assets/icons/agendamento.svg';
import FAQIcon from '../../assets/icons/faq.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import LogoutIcon from '../../assets/icons/logout.png';

function Sidebar() {

    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        navigate('/login');
    };

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
                    <button
                        onClick={() => setShowModal(true)}
                        className="flex flex-col items-center text-white focus:outline-none"
                    >
                        <img src={LogoutIcon} alt="Logout" className="w-8 h-8" />
                        <span className="hidden md:block text-sm mt-1">Sair</span>
                    </button>
                </nav>
                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
                            <h2 className="text-lg font-semibold mb-4 text-gray-800">Deseja sair da sua conta?</h2>
                            <div className="flex justify-center gap-4 mt-4">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={handleLogout}
                                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                                >
                                    Sair
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Sidebar;
