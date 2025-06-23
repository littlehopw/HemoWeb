import prisma from '../prisma/client.js';

const agendamentoController = {
  // Listar todos
  async getAll(req, res) {
    try {
      const agendamento = await prisma.agendamento.findMany({
        include: {
          hemocentro: true
        }
      });
      res.json(agendamento);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar os Agendamento." });
    }
  },

  // Listar um pelo id
  async getOne(req, res) {
    try {
      const agendamento = await prisma.agendamento.findUnique({
        where: { id: Number(req.params.id) },
        include: {
          hemocentro: true
        }
      });
      if (agendamento) {
        res.json(agendamento);
      } else {
        res.status(404).json({ error: "Agendamento não encontrado." });
      }
    } catch (error) {
      console.error("Erro ao buscar agendamento:", error);
      res.status(500).json({ error: "Erro ao buscar o Agendamento." });
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