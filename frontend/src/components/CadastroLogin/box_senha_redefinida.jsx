import "../../../src/App.css";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

function SenhaRedefinidaBox() {;

    return (
        <div className="bg-white rounded-xl shadow-lg p-9 w-full max-w-sm text-center mt-[-20rem]">
            <h1 className="text-2xl font-extrabold text-gray-800 mb-3">Senha redefinida!</h1>
            <p className="text-sm text-gray-600 mb-6">
                Agora é só fazer o login com a sua nova senha!
            </p>
            <Link to="/login">
                <button className="w-full bg-blue-700 text-white py-1.5 text-sm rounded-md hover:bg-blue-800 transition mt-2">
                    Fazer Login
                </button>
            </Link>
        </div>
    );
}

export default SenhaRedefinidaBox;