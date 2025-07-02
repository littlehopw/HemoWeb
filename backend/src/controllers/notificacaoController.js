import prisma from '../prisma/client.js';
import { enviarEmail } from '../services/emailService.js';

const notificacaoController = {
  // Listar todos
  async getAll(req, res) {
    try {
      const notificacoes = await prisma.notificacao.findMany({});
      res.json(notificacoes);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar as Notificação." });
    }
  },

  // Listar um pelo id
  async getOne(req, res) {
    try {
      const notificacao = await prisma.notificacao.findUnique({ where: { id: Number(req.params.id) } });
      if (notificacao) {
        res.json(notificacao);
      } else {
        res.status(404).json({ error: "Notificação não encontrada." });
      }
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar a Notificação." });
    }
  },

  // Criar um
  async create(req, res) {
    try {
      const { titulo, mensagem, status, usuario_fk } = req.body;

      if (!titulo || !mensagem || status === undefined || !usuario_fk) {
        return res.status(400).json({ error: "Campos obrigatórios faltando." });
      }

      const notificacao = await prisma.notificacao.create({
        data: {
          titulo,
          mensagem,
          status,
          usuario_fk: Number(usuario_fk),
        },
      });

      // Busca o usuário para checar se aceita notificações
      const usuario = await prisma.usuario.findUnique({
        where: { id: Number(usuario_fk) },
        select: { email: true, notificacoes: true, nome: true },
      });

      if (usuario?.notificacoes) {
        console.log("📨 Enviando e-mail para:", usuario.email);
        await enviarEmail({
          to: usuario.email,
          subject: `Nova Notificação: ${titulo}`,
          html: `<p>Olá ${usuario.nome},</p><p>${mensagem}</p>`
        });
      }

      res.status(201).json(notificacao);
    } catch (error) {
      console.error('Erro ao criar a Notificação:', error);
      res.status(500).json({ error: error.message || "Erro ao criar a Notificação." });
    }
  },


  // Atualizar
  async update(req, res) {
    try {
      const notificacao = await prisma.notificacao.update({
        where: { id: Number(req.params.id) },
        data: {
          status: req.body.status || "lida"
        }
      });
      res.json(notificacao);
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar a Notificação." });
    }
  },


  // Deletar
  async delete(req, res) {
    try {
      await prisma.notificacao.delete({ where: { id: Number(req.params.id) } });
      res.json({ message: "Notificação removida com sucesso!" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao excluir a Notificação." });
    }
  },

  // Deletar todas de um usuário
  async deleteByUsuario(req, res) {
    try {
      const usuarioId = Number(req.params.id);
      await prisma.notificacao.deleteMany({ where: { usuario_fk: usuarioId } });
      res.json({ message: "Todas as notificações foram removidas com sucesso!" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao excluir notificações do usuário." });
    }
  },

}

export default notificacaoController;