import prisma from '../prisma/client.js';

const hemocentrosController = {
  // Listar todos
  async getAll(req, res) {
    try {
      const hemocentros = await prisma.hemocentros.findMany({});
      res.json(hemocentros);
    } catch (error) {
      res.status(500).json({error: "Erro ao buscar os Hemocentros."});
    }
  },

  // Listar um pelo id
  async getOne(req, res) {
    try {
      const hemocentro = await prisma.hemocentros.findUnique({ where: { id: Number(req.params.id)} });
      if (hemocentro) {
        res.json(hemocentro);
      } else {
        res.status(404).json({error: "Hemocentro não encontrado."});
      }
    } catch (error) {
      res.status(500).json({error: "Erro ao buscar o Hemocentro."});
    }
  },

  // Criar um
  async create(req, res) {
    try {
      const hemocentro = await prisma.hemocentros.create({ data: req.body });
      res.json(hemocentro);
    } catch (error) {
      res.status(500).json({error: "Erro ao criar o Hemocentro."});
    }
  },

  // Atualizar
  async update(req, res) {
    try {
      const hemocentro = await prisma.hemocentros.update({ where: { id: Number(req.params.id) }, data: req.body });
      res.json(hemocentro);
    } catch (error) {
      res.status(500).json({error: "Erro ao atualizar o Hemocentro."});
    }
  },

  // Deletar
  async delete(req, res) {
    try {
      await prisma.hemocentros.delete({ where: { id: Number(req.params.id)} });
      res.json({ message: "Hemocentro removido com sucesso!" });
    } catch (error) {
      res.status(500).json({error: "Erro ao excluir o Hemocentro."});
    }
  },
}

export default hemocentrosController;