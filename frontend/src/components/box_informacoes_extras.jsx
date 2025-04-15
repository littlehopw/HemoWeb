import "../../src/App.css";
import React from "react";
import { Link } from 'react-router-dom';

function InformacoesExtrasBox() {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm text-center mt-[-6rem]">
            <h1 className="text-2xl font-extrabold text-gray-900 mb-2">E-mail Confirmado!</h1>
            <p className="text-sm text-gray-600 mb-4">
                Agora, complete seu cadastro <br /> preenchendo os campos abaixo com seus dados:
            </p>
            <form className="space-y-3 text-left text-sm">
                <div>
                    <label className="font-medium text-gray-700">DATA DE NASCIMENTO</label>
                    <input
                        type="text"
                        placeholder="00/00/00"
                        className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="font-medium text-gray-700">TIPO SANGUÍNEO</label>
                    <select className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Selecione</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" id="medula" className="mr-2" />
                    <label htmlFor="medula" className="text-sm">É doador de medula óssea?</label>
                </div>
                <div className="text-sm">
                    <span className="font-medium">Sexo:</span>
                    <div className="flex gap-4 mt-1">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="sexo"
                                value="feminino"
                                className="mr-1"
                            />
                            Feminino
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="sexo"
                                value="masculino"
                                className="mr-1"
                            />
                            Masculino
                        </label>
                    </div>
                </div>
                <Link to="/confirmacao_cadastro">
                    <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition mt-2">
                        Termine seu cadastro
                    </button>
                </Link>
            </form>
        </div>
    );
}

export default InformacoesExtrasBox;
