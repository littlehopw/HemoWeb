import authMiddleware from '../middlewares/authMiddleware.js';
import express from 'express';
import agendamentoController from '../controllers/agendamentoController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Agendamento
 *   description: Rotas de Agendamento
 */

/**
 * @swagger
 * /agendamento:
 *   get:
 *     summary: Lista agendamentos
 *     tags: [Agendamento]
 *     responses:
 *       200:
 *         description: Lista de agendamento
 */

router.get("/", authMiddleware, agendamentoController.getAll);

/**
 * @swagger
 * /agendamento:
 *   post:
 *     summary: Cria um agendamento
 *     tags: [Agendamento]
 *     responses:
 *       200:
 *         description: Agendamento Criado
 */
router.post("/", authMiddleware, agendamentoController.create);

/**
 * @swagger
 * /agendamento:
 *   put:
 *     summary: Atualiza um agendamento
 *     tags: [Agendamento]
 *     responses:
 *       200:
 *         description: Agendamento atualizado
 */
router.put("/:id", authMiddleware, agendamentoController.update);

/**
 * @swagger
 * /agendamento:
 *   delete:
 *     summary: Exclui um agendamento
 *     tags: [Agendamento]
 *     responses:
 *       200:
 *         description: Agendamento excluído
 */
router.delete("/:id", authMiddleware, agendamentoController.delete);

export default router;