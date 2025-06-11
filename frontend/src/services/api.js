// src/services/api.js

const API_URL = "/api";

// Cadastro de novo usuário
export async function cadastrar(userData) {
  const response = await fetch(`${API_URL}/auth/cadastro`, {
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

  const data = await response.json();

  // Salva token e dados do usuário no localStorage
  localStorage.setItem("token", data.token);
  localStorage.setItem("usuario", JSON.stringify(data.usuario));
  return data;
}

// Login do usuário
export async function login(email, senha) {
  const response = await fetch(`${API_URL}/auth/login`, {
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

  const data = await response.json();

  // Salva token e dados do usuário no localStorage
  localStorage.setItem("token", data.token);
  localStorage.setItem("usuario", JSON.stringify(data.usuario));
  return data;
}

// Atualização do perfil
export async function atualizarPerfil(dadosAtualizados) {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/user/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(dadosAtualizados),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error || "Erro ao atualizar perfil");
  }

  const updatedUser = await response.json();
  localStorage.setItem("usuario", JSON.stringify(updatedUser));
  return updatedUser;
}
