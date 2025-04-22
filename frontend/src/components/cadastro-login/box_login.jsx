import "../../../src/App.css";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from 'react-router-dom';

function LoginBox() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm text-center mt-[-8rem]">
            <h1 className="text-3xl font-extrabold mb-2">Faça Login</h1>
            <form className="space-y-3 text-left text-xs">
                <div>
                    <label className="font-medium">E-MAIL</label>
                    <input
                        type="email"
                        placeholder="seuemail@dominio.com"
                        className="w-full border border-gray-300 rounded-md p-1 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                </div>
                <div className="relative">
                    <label className="font-medium">SENHA</label>
                    <input type={showPassword ? "text" : "password"} className="w-full border border-gray-300 rounded-md p-1 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pr-10" />
                    <button type="button" className="absolute right-2 top-[30px] text-gray-500 hover:text-gray-700" onClick={() => setShowPassword(!showPassword)} >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                </div>
                <Link to="/esqueci_minha_senha">
                    <div className="text-right text-xs mt-1">
                        <a href="#" className="text-blue-700 underline">Esqueci minha senha</a>
                    </div>
                </Link>
                <Link to="/">
                    <button className="w-full bg-blue-700 text-white py-1.5 text-sm rounded-md hover:bg-blue-800 transition mt-2">
                        Faça Login
                    </button>
                </Link>
            </form>
            <div className="mt-4 text-xs text-gray-500 text-center">OU FAÇA LOGIN COM:</div>
            <div className="flex justify-center gap-3 mt-1.5">
                <button className="p-1.5 bg-gray-100 rounded-full hover:bg-gray-200">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                </button>
                <button className="p-1.5 bg-gray-100 rounded-full hover:bg-gray-200">
                    <img src="https://www.svgrepo.com/show/452196/facebook-1.svg" alt="Facebook" className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}

export default LoginBox;
