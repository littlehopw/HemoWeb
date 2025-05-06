import "../../../src/App.css";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { cadastrar } from "../../services/api";

function CadastroBox() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    tipo_sanguineo: "",
    data_nascimento: "",
    medula_ossea: false,
    notificacoes: true,
    sexo: "",
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await cadastrar(form);
      alert("Usuário cadastrado com sucesso!");
      navigate("/login");
    } catch (err) {
      alert("Erro: " + err.message);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm text-center mt-[-8rem]">
      <h1 className="text-3xl font-extrabold mb-2">Cadastre-se</h1>
      <p className="text-sm text-gray-600 mb-4">
        Cadastre-se na plataforma e organize suas doações
      </p>
      <form className="space-y-3 text-left text-xs" onSubmit={handleSubmit}>
        <div>
          <label className="font-medium">NOME COMPLETO</label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-1 mt-1 text-sm"
          />
        </div>
        <div>
          <label className="font-medium">E-MAIL</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="seuemail@dominio.com"
            className="w-full border border-gray-300 rounded-md p-1 mt-1 text-sm"
          />
        </div>
        <div>
          <label className="font-medium">SENHA</label>
          <input
            type="password"
            name="senha"
            value={form.senha}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-1 mt-1 text-sm"
          />
        </div>
        <div>
          <label className="font-medium text-gray-700">TIPO SANGUÍNEO</label>
          <select
            name="tipo_sanguineo"
            value={form.tipo_sanguineo}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
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
        <div>
          <label className="font-medium">DATA DE NASCIMENTO</label>
          <input
            type="date"
            name="data_nascimento"
            value={form.data_nascimento}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-1 mt-1 text-sm"
          />
        </div>
        <div className="flex items-center text-xs">
          <input
            type="checkbox"
            name="medula_ossea"
            checked={form.medula_ossea}
            onChange={handleChange}
            className="mr-2"
          />
          <span>Sou doador de medula óssea</span>
        </div>

        <div className="text-sm">
          <span className="font-medium">Sexo:</span>
          <div className="flex gap-4 mt-1">
            <label className="flex items-center">
              <input
                type="radio"
                name="sexo"
                value="feminino"
                checked={form.sexo === "feminino"} // ✅ controla o valor
                onChange={handleChange}
                className="mr-1"
              />
              Feminino
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="sexo"
                value="masculino"
                checked={form.sexo === "masculino"} // ✅ controla o valor
                onChange={handleChange}
                className="mr-1"
              />
              Masculino
            </label>
          </div>
        </div>


        <br />
        <div className="flex items-center text-xs">
          <input type="checkbox" className="mr-2" />
          <span>
            Concordo com o <a className="text-blue-600 underline" href="#">Termo de Uso</a> e <a className="text-blue-600 underline" href="#">Política de Privacidade</a>
          </span>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-1.5 text-sm rounded-md hover:bg-blue-800 transition"
        >
          Cadastre-se
        </button>
      </form>
      <div className="mt-4 text-xs text-gray-500">OU CADASTRE-SE COM:</div>
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

export default CadastroBox;
