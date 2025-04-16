import "../../../src/App.css";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from 'react-router-dom';

function RedefinaASenhaBox() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="bg-white rounded-xl shadow-lg p-9 w-full max-w-sm text-center mt-[-20rem]">
            <div className="text-left text-sm mb-4">
                <Link to="/esqueci_minha_senha" className="text-gray-600 hover:text-gray-800 font-medium">← Voltar</Link>
            </div>
            <h1 className="text-2xl font-extrabold mb-2">Redefinição de senha!</h1>
            <p className="text-sm text-gray-600 mb-5">
                Digite uma senha nova para a sua conta:
            </p>
            <form className="space-y-4 text-left text-xs">
                <div className="relative">
                    <label className="font-medium">NOVA SENHA</label>
                    <input type={showPassword ? "text" : "password"} className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pr-10"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-8 text-gray-500 hover:text-gray-700" >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                </div>
                <Link to="/senha_redefinida">
                    <button type="submit" className="w-full bg-blue-700 text-white py-1.5 text-sm rounded-md hover:bg-blue-800 transition mt-2">
                        Redefina sua Senha
                    </button>
                </Link>
            </form>
        </div>
    );
}

export default RedefinaASenhaBox;
