import "../../../src/App.css";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/api";
import {
  auth,
  googleProvider,
} from "../../firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { fetchAgendamentosEVerificar } from "../../utils/notificacao_utils";
import { useNotificacoes } from '../../context/notificacao_contexto.jsx';
import { toast } from 'react-hot-toast';

function LoginBox() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false); // estado para bloquear cliques múltiplos
  const navigate = useNavigate();
  const { fetchNotificacoes } = useNotificacoes();

  // Login tradicional com email e senha
  const handleLogin = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const data = await login(email, senha);
      localStorage.setItem("token", data.token);
      localStorage.setItem("usuario", JSON.stringify(data.usuario));

      await fetchAgendamentosEVerificar();
      await fetchNotificacoes();

      toast.success("Login realizado com sucesso!");
      navigate("/perfil");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Login social com Google ou Facebook
  const handleSocialLogin = async (provider) => {
    if (loading) return;
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const data = await login(user.email, "");
      localStorage.setItem("token", data.token);
      localStorage.setItem("usuario", JSON.stringify(data.usuario || data));

      await fetchAgendamentosEVerificar();
      await fetchNotificacoes();

      toast.success("Login com rede social realizado com sucesso!");
      navigate("/perfil");
    } catch (error) {
      console.error("Erro no login social:", error);
      toast.error("Erro no login social: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm text-center mt-[-8rem]">
      <h1 className="text-3xl font-extrabold mb-2">Faça Login</h1>
      <form className="space-y-3 text-left text-xs" onSubmit={handleLogin}>
        <div>
          <label className="font-medium">E-MAIL</label>
          <input
            type="email"
            placeholder="seuemail@dominio.com"
            className="w-full border border-gray-300 rounded-md p-1 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading} // bloqueia enquanto está carregando
          />
        </div>
        <div className="relative">
          <label className="font-medium">SENHA</label>
          <input
            type={showPassword ? "text" : "password"}
            className="w-full border border-gray-300 rounded-md p-1 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pr-10"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            disabled={loading}
          />
          <button
            type="button"
            className="absolute right-2 top-[30px] text-gray-500 hover:text-gray-700"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
            disabled={loading}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>
        <div className="text-right text-xs mt-1">
          <a href="#" className="text-blue-700 underline">
            Esqueci minha senha
          </a>
        </div>
        <button
          type="submit"
          className={`w-full bg-blue-700 text-white py-1.5 text-sm rounded-md hover:bg-blue-800 transition mt-2 ${loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          disabled={loading}
        >
          Faça Login
        </button>
      </form>

      <div className="mt-4 text-xs text-gray-500 text-center">
        OU FAÇA LOGIN COM:
      </div>
      <div className="flex justify-center gap-3 mt-1.5">
        <button
          className={`p-1.5 bg-gray-100 rounded-full hover:bg-gray-200 ${loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          type="button"
          onClick={() => handleSocialLogin(googleProvider)}
          disabled={loading}
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
        </button>
      </div>
    </div>
  );
}

export default LoginBox;
