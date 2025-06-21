import express from 'express';
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './../swagger.js'
import cors from 'cors';
import './config/env.js';
import prisma from './prisma/client.js'; 
import testRoutes from './routes/testRoutes.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import iconeRoutes from './routes/iconeRoutes.js'
import hemocentrosRoutes from './routes/hemocentrosRoutes.js';
import agendamentoRoutes from './routes/agendamentoRoutes.js';
import notificacaoRoutes from './routes/notificacaoRoutes.js';
import { testConnection } from './controllers/testController.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/test', testRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use("/api/icone", iconeRoutes);
app.use("/hemocentros", hemocentrosRoutes);
app.use("/agendamento", agendamentoRoutes);
app.use("/notificacao", notificacaoRoutes);
app.get('/ping', testConnection);

prisma.$connect()
  .then(() => {
    console.log("Prisma conectado com sucesso");

    app.listen(PORT, () => {
      console.log(`Server rodando na porta: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Falha ao conectar com o banco via Prisma:", err);
  });

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});
