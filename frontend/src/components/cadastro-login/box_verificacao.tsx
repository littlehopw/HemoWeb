import "../../../src/App.css";
import React from "react";
import { Link } from 'react-router-dom';

function VerificacaoBox() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm text-center mt-[-8rem]">
      <div className="text-left mb-4">
        <Link to="/cadastro" className="text-sm text-gray-500 hover:underline">
          &larr; Voltar
        </Link>
      </div>
      <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Verifique seu e-mail</h1>
      <p className="text-sm text-gray-600 mb-4">
        Enviamos um código de 6 dígitos para o e-mail: <br />
        <span className="font-medium">seuemail@dominio.com</span>, coloque-os nos espaços adequados para fazer a verificação.
      </p>

      <div className="flex justify-between mb-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <input key={index}
            type="text"
            className="w-10 h-12 border border-blue-400 rounded-md text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>
      <Link to="/informacoes_extras">
        <button className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition">
          Verifique seu e-mail
        </button>
      </Link>
    </div>
  );
}

export default VerificacaoBox;
