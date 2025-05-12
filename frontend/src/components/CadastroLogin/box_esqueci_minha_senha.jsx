import "../../../src/App.css";
import React from "react";
import { Link } from 'react-router-dom';

function EsqueciMinhaSenhaBox() {
    return (
        <div className="bg-white rounded-xl shadow-lg p-9 w-full max-w-sm text-center mt-[-20rem]">
            <div className="text-left text-sm mb-4">
                <Link to="/login" className="text-gray-600 hover:text-gray-800 font-medium">← Voltar</Link>
            </div>
            <h1 className="text-2xl font-extrabold mb-2">Redefinição de senha!</h1>
            <p className="text-sm text-gray-600 mb-5">
                Informe o e-mail utilizado na sua conta e enviaremos um link de recuperação.
            </p>
            <form className="space-y-3 text-left text-xs">
                <div>
                    <label className="font-medium">E-MAIL</label>
                    <input
                        type="email"
                        placeholder="seuemail@dominio.com"
                        className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pr-10"
                    />
                </div>
                <Link to="/redefina_a_senha">
                    <button className="w-full bg-blue-700 text-white py-1.5 text-sm rounded-md hover:bg-blue-800 transition mt-2">
                        Envie o código
                    </button>
                </Link>
            </form>
        </div>
    );
}

export default EsqueciMinhaSenhaBox;
