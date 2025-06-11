import express from 'express';
import cors from 'cors';
import './config/env.js';
import prisma from './prisma/client.js'; // Prisma substitui pool
import testRoutes from './routes/testRoutes.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { testConnection } from './controllers/testController.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/test', testRoutes);
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.get('/ping', testConnection);

prisma.$connect()
  .then(() => {
    console.log("✅ Prisma conectado com sucesso");

    app.listen(PORT, () => {
      console.log(`🚀 Server rodando na porta: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Falha ao conectar com o banco via Prisma:", err);
  });

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});
