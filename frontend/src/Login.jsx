import React from "react";
import "./Login.css"; // Opcional: Adicione estilos específicos para a página de login

function Login() {
  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Digite seu email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" placeholder="Digite sua senha" />
        </div>
        <button type="submit" className="btn-login">Entrar</button>
      </form>
    </div>
  );
}

export default Login;