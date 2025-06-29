import prisma from '../prisma/client.js';

const agendamentoController = {
  // Listar todos
  async getAll(req, res) {
    try {
      const usuarioId = req.usuarioId; // <- do middleware de autenticação
      const agendamentos = await prisma.agendamento.findMany({
        where: {
          usuario_fk: usuarioId
        },
        include: {
          hemocentro: true
        }
      });
      res.json(agendamentos);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar os Agendamentos." });
    }
  },

  // Criar um
  async create(req, res) {
    try {
      const agendamento = await prisma.agendamento.create({ data: req.body });
      res.json(agendamento);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar o Agendamento." });
    }
  },

  // Atualizar
  async update(req, res) {
    try {
      const agendamento = await prisma.agendamento.update({ where: { id: Number(req.params.id) }, data: req.body });
      res.json(agendamento);
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar o Agendamento." });
    }
  },

  // Deletar
  async delete(req, res) {
    try {
      await prisma.agendamento.delete({ where: { id: Number(req.params.id) } });
      res.json({ message: "Agendamento removido com sucesso!" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao excluir o Agendamento." });
    }
  },
}

export default agendamentoController;