// src/services/api.js
export async function cadastrar(userData) {
    const response = await fetch("http://localhost:5000/api/auth/cadastro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });
  
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error || "Erro ao cadastrar usuário");
    }
  
    return await response.json(); // retorna os dados do usuário criado
  }
  
export async function login(email, senha) {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, senha }),
    });
  
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error || "Erro ao fazer login");
    }
  
    return await response.json(); // { token: "..." }
  }