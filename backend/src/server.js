import express from 'express';
import cors from 'cors';
import './config/env.js';
import pool from './config/database.js';
import testRoutes from './routes/testRoutes.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { testConnection } from './controllers/testController.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Rotas organizadas com prefixo /api
app.use('/api/test', testRoutes);       // ex: GET /api/test/ping
app.use('/api/auth', authRoutes);       // ex: POST /api/auth/login
app.use('/api/user', userRoutes);       // ex: GET /api/user/profile

// Rota simples de saúde do servidor (opcional)
app.get('/ping', testConnection);

app.listen(PORT, () => {
  console.log(`Server rodando na porta: ${PORT}`);
});
