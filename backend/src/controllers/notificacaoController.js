const prisma = require("../prisma/client");

const notificacaoController = {
  // Listar todos
  async getAll(req, res) {
    try {
      const notificacoes = await prisma.notificacao.findMany({});
      res.json(notificacoes);
    } catch (error) {
      res.status(500).json({error: "Erro ao buscar as Notificação."});
    }
  },

  // Listar um pelo id
  async getOne(req, res) {
    try {
      const notificacao = await prisma.notificacao.findUnique({ where: { id: Number(req.params.id)} });
      if (notificacao) {
        res.json(notificacao);
      } else {
        res.status(404).json({error: "Notificação não encontrada."});
      }
    } catch (error) {
      res.status(500).json({error: "Erro ao buscar a Notificação."});
    }
  },

  // Criar um
  async create(req, res) {
    try {
      const notificacao = await prisma.notificacao.create({ data: req.body });
      res.json(notificacao);
    } catch (error) {
      res.status(500).json({error: "Erro ao criar a Notificação."});
    }
  },

  // Atualizar
  async update(req, res) {
    try {
      const notificacao = await prisma.notificacao.update({ where: { id: Number(req.params.id) }, data: req.body });
      res.json(notificacao);
    } catch (error) {
      res.status(500).json({error: "Erro ao atualizar a Notificação."});
    }
  },

  // Deletar
  async delete(req, res) {
    try {
      await prisma.notificacao.delete({ where: { id: Number(req.params.id)} });
      res.json({ message: "Notificação removida com sucesso!" });
    } catch (error) {
      res.status(500).json({error: "Erro ao excluir a Notificação."});
    }
  },
}

module.exports = notificacaoController;
