import prisma from '../prisma/client.js';
import bcrypt from 'bcrypt';

// GET /profile
export const getProfile = async (req, res) => {
  const userId = req.user.id;

  try {
    const usuario = await prisma.usuario.findUnique({
      where: { id: userId },
      select: {
        id: true,
        nome: true,
        email: true,
        tipo_sanguineo: true,
        medula_ossea: true,
        sexo: true,
        data_nascimento: true,
        notificacoes: true,
        data_criacao: true,
        data_modificacao: true
      }
    });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT /profile
export const updateProfile = async (req, res) => {
  const userId = req.user.id;
  const {
    nome,
    email,
    senha,
    tipo_sanguineo,
    medula_ossea,
    data_nascimento,
    notificacoes,
    sexo
  } = req.body;

  try {
    const data = {};

    if (nome !== undefined) data.nome = nome;
    if (email !== undefined) data.email = email;
    if (senha !== undefined) data.senha = await bcrypt.hash(senha, 10);
    if (tipo_sanguineo !== undefined) data.tipo_sanguineo = tipo_sanguineo;
    if (medula_ossea !== undefined) data.medula_ossea = medula_ossea;
    if (data_nascimento !== undefined) data.data_nascimento = new Date(data_nascimento);
    if (notificacoes !== undefined) data.notificacoes = notificacoes;
    if (sexo !== undefined) data.sexo = sexo;

    data.data_modificacao = new Date();

    const usuarioAtualizado = await prisma.usuario.update({
      where: { id: userId },
      data,
      select: {
        id: true,
        nome: true,
        email: true,
        tipo_sanguineo: true,
        medula_ossea: true,
        sexo: true,
        data_nascimento: true,
        notificacoes: true,
        data_criacao: true,
        data_modificacao: true
      }
    });

    res.json(usuarioAtualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE /profile
export const deleteProfile = async (req, res) => {
  const userId = req.user.id;

  try {
    await prisma.usuario.delete({
      where: { id: userId }
    });

    res.json({ message: 'Conta excluída com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
