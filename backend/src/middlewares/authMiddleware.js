import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Log para debug no terminal
  console.log('🔍 Authorization Header recebido:', authHeader);

  // Verifica se o header existe e começa com "Bearer "
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token não fornecido.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded; // Exemplo: { id: 1, email: "lucas@email.com" }

    console.log('🔐 Token decodificado com sucesso:', decoded);
    next();
  } catch (error) {
    console.error('❌ Erro ao verificar token:', error.message);
    return res.status(401).json({ error: 'Token inválido ou expirado.' });
  }
};

export default authMiddleware;
