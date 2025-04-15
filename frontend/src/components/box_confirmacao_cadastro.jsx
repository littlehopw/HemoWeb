import "../../src/App.css";
import React from "react";
import { Link } from 'react-router-dom';

function ConfirmacaoCadastroBox() {
    return (
        <div className="bg-white rounded-xl shadow-lg p-9 w-full max-w-sm text-center mt-[-20rem]">
            <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Conta criada!</h1>
            <p className="text-sm text-gray-600 mb-6">
                Agora basta fazer o login com a <br /> conta que você criou.
            </p>
            <Link
                to="/login" // Altere conforme a rota da sua aplicação
                className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition inline-block"
            >
                Fazer Login
            </Link>
        </div>
    );
}

export default ConfirmacaoCadastroBox;
