import prisma from '../prisma/client.js';

const iconeController = {
  // Listar todos
  async getAll(req, res) {
    try {
      const icones = await prisma.icone.findMany({});
      res.json(icones);
    } catch (error) {
      res.status(500).json({error: "Erro ao buscar os ícones."});
    }
  },

  // Listar um pelo id
  async getOne(req, res) {
    try {
      const icone = await prisma.icone.findUnique({ where: { id: Number(req.params.id)} });
      if (icone) {
        res.json(icone);
      } else {
        res.status(404).json({error: "Ícone não encontrado."});
      }
    } catch (error) {
      res.status(500).json({error: "Erro ao buscar o ícone."});
    }
  },

  // Criar um
  async create(req, res) {
    try {
      const icone = await prisma.icone.create({ data: req.body });
      res.json(icone);
    } catch (error) {
      res.status(500).json({error: "Erro ao criar o ícone."});
    }
  },

  // Atualizar
  async update(req, res) {
    try {
      const icone = await prisma.icone.update({ where: { id: Number(req.params.id) }, data: req.body });
      res.json(icone);
    } catch (error) {
      res.status(500).json({error: "Erro ao atualizar o ícone."});
    }
  },

  // Deletar
  async delete(req, res) {
    try {
      await prisma.icone.delete({ where: { id: Number(req.params.id)} });
      res.json({ message: "Ícone removido com sucesso!" });
    } catch (error) {
      res.status(500).json({error: "Erro ao excluir o ícone."});
    }
  },
}

export default iconeController;