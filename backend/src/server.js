import express from 'express';
import cors from 'cors';
import './config/env.js';
import prisma from './prisma/client.js'; 
import testRoutes from './routes/testRoutes.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { testConnection } from './controllers/testController.js';

const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const app = express();
const PORT = process.env.PORT || 5000;
const iconeRoutes = require("./src/routes/iconeRoutes");
const hemocentrosRoutes = require("./src/routes/hemocentrosRoutes");
const agendamentoRoutes = require("./src/routes/agendamentoRoutes");
const notificacaoRoutes = require("./src/routes/notificacaoRoutes");

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/test', testRoutes);
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use("/icone", iconeRoutes);
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
