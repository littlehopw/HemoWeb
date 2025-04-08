import "../../src/App.css";
import React from "react";

function CadastroBox() {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-2">Cadastre-se</h1>
        <p className="text-sm text-gray-600 mb-6">
          Cadastre-se na plataforma e organize suas doações
        </p>
  
        <form className="space-y-4 text-left">
          <div>
            <label className="text-sm font-medium">NOME COMPLETO</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div>
            <label className="text-sm font-medium">E-MAIL</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div>
            <label className="text-sm font-medium">SENHA</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            <span>
              Concordo com o <a className="text-blue-600 underline" href="#">Termo de Uso</a> e <a className="text-blue-600 underline" href="#">Política de Privacidade</a>
            </span>
          </div>
  
          <button className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition">
            Crie sua conta
          </button>
        </form>
  
        <div className="mt-6 text-sm text-gray-500">OU CADASTRE-SE COM:</div>
        <div className="flex justify-center gap-4 mt-2">
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-6 h-6" />
          </button>
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <img src="https://www.svgrepo.com/show/452196/facebook-1.svg" alt="Facebook" className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  }
  
  export default CadastroBox;
  