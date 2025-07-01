import { createContext, useContext, useEffect, useState } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notificacoes, setNotificacoes] = useState([]);

  async function fetchNotificacoes() {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const res = await fetch("/api/notificacao", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setNotificacoes(data);
    } catch (err) {
      console.error("Erro ao carregar notificações", err);
    }
  }

  async function fetchAgendamentosEVerificar() {
    const token = localStorage.getItem("token");
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (!token || !usuario) return;

    try {
      const resNotif = await fetch("/api/notificacao", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const notificacoesAtualizadas = await resNotif.json();
      const res = await fetch("/api/agendamento", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const agendamentos = await res.json();
      const hojeISO = new Date().toISOString().split("T")[0];
      const amanhaISO = new Date(Date.now() + 86400000).toISOString().split("T")[0];
      const promisesCriacao = [];

      for (const agendamento of agendamentos) {
        const dataAgendadaISO = new Date(agendamento.data_agendamento).toISOString().split("T")[0];

        let mensagem = null;

        if (dataAgendadaISO === hojeISO) {
          mensagem = "Hoje é o dia da sua doação!";
        } else if (dataAgendadaISO === amanhaISO) {
          mensagem = "Falta 1 dia para sua doação!";
        }

        if (mensagem) {
          const jaExiste = notificacoesAtualizadas.some(
            (n) =>
              n.mensagem === mensagem &&
              n.usuario_fk === usuario.id &&
              n.status === false
          );

          if (!jaExiste) {
            console.log(`[${new Date().toISOString()}] Criando notificação para agendamento: ${agendamento.id} - ${mensagem}`);

            promisesCriacao.push(
              fetch("/api/notificacao", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                  titulo: "Lembrete de doação",
                  mensagem,
                  status: false,
                  usuario_fk: usuario.id,
                }),
              })
            );
          }
        }
      }
      if (promisesCriacao.length > 0) {
        await Promise.all(promisesCriacao);
      }

      await fetchNotificacoes();

    } catch (err) {
      console.error("Erro ao buscar agendamentos e verificar notificações", err);
    }
  }

  async function deletarTodasNotificacoesDoUsuario() {
    const token = localStorage.getItem("token");
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (!token || !usuario) return;

    await fetch(`/api/notificacao/usuario/${usuario.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    await fetchNotificacoes();
  }

  async function criarNotificacao(data) {
    const token = localStorage.getItem("token");
    if (!token) return;

    await fetch("/api/notificacao", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    fetchNotificacoes();
  }

  async function marcarComoLida(id) {
    const token = localStorage.getItem("token");
    if (!token) return;

    await fetch(`/api/notificacao/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status: true }),
    });

    setNotificacoes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, status: true } : n))
    );
  }

  async function marcarTodasComoLidas() {
    await Promise.all(
      notificacoes
        .filter((n) => n.status === false)
        .map((n) => marcarComoLida(n.id))
    );
  }

  useEffect(() => {
    async function inicializar() {
      const token = localStorage.getItem("token");
      const usuario = localStorage.getItem("usuario");
      if (!token || !usuario) return;

      await fetchNotificacoes();
    }

    inicializar();
  }, []);

  const notificacoesNovas = notificacoes.filter((n) => n.status === false);

  return (
    <NotificationContext.Provider
      value={{
        notificacoes,
        notificacoesNovas,
        fetchNotificacoes,
        marcarComoLida,
        marcarTodasComoLidas,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotificacoes() {
  return useContext(NotificationContext);
}