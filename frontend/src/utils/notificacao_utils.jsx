export async function fetchAgendamentosEVerificar() {
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
          await fetch("/api/notificacao", {
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
          });
        }
      }
    }
  } catch (err) {
    console.error("Erro ao buscar agendamentos e verificar notificações", err);
  }
}
