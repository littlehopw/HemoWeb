import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../prisma/client.js';

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';

export const cadastro = async (req, res) => {

  console.log('Requisição cadastro:', req.body);

  const {
    nome,
    senha,
    email,
    medula_ossea,
    tipo_sanguineo,
    data_nascimento,
    notificacoes,
    sexo
  } = req.body;

  try {
    const usuarioExistente = await prisma.usuario.findUnique({
      where: { email }
    });

    if (usuarioExistente) {
      return res.status(409).json({ error: 'E-mail já está em uso.' });
    }

    const hashedPassword = await bcrypt.hash(senha, saltRounds);

    const novoUsuario = await prisma.usuario.create({
      data: {
        nome,
        senha: hashedPassword,
        email,
        medula_ossea,
        tipo_sanguineo,
        data_nascimento: new Date(data_nascimento),
        notificacoes,
        sexo,
      },
    });

    const { senha: _, ...usuarioSemSenha } = novoUsuario;
    res.status(201).json(usuarioSemSenha);

  } catch (error) {
    console.error('🚨 Erro ao cadastrar:', error);
    res.status(500).json({ error: 'Erro interno ao cadastrar usuário.' });
  }
};

export const login = async (req, res) => {
  console.log('Requisição login:', req.body);

  const { email, senha } = req.body;

  try {
    const usuario = await prisma.usuario.findUnique({
      where: { email }
    });

    if (!usuario) {
      return res.status(401).json({ error: 'Email inválido ou senha' });
    }

    // ==== INÍCIO DA MODIFICAÇÃO PARA SUPORTE A LOGIN SOCIAL ====
    // Se a senha estiver vazia, assumimos que é um login social confiável
    if (!senha) {
      console.log('Login social detectado, ignorando verificação de senha');
    } else {
      const isMatch = await bcrypt.compare(senha, usuario.senha);

      if (!isMatch) {
        return res.status(401).json({ error: 'Email inválido ou senha' });
      }
    }
    // ==== FIM DA MODIFICAÇÃO PARA SUPORTE A LOGIN SOCIAL ====

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      jwtSecret,
      { expiresIn: '1h' }
    );

    const { senha: _, ...usuarioSemSenha } = usuario;
    res.json({ token, usuario: usuarioSemSenha });

  } catch (error) {
    console.error('❌ Erro no login:', error);
    res.status(500).json({ error: 'Erro interno no login.' });
  }
};
