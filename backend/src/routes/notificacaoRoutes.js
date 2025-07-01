import authMiddleware from '../middlewares/authMiddleware.js';
import express from 'express';
import notificacaoController from '../controllers/notificacaoController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Notificação
 *   description: Rotas de Notificação
 */


/**
 * @swagger
 * /notificacao:
 *   get:
 *     summary: Lista notificações
 *     tags: [Notificação]
 *     responses:
 *       200:
 *         description: Lista de notificação
 */
router.get("/", authMiddleware, notificacaoController.getAll);

/**
 * @swagger
 * /notificacao:
 *   get:
 *     summary: Lista uma notificação
 *     tags: [Notificação]
 *     responses:
 *       200:
 *         description: Notificação específica
 */
router.get("/:id", authMiddleware, notificacaoController.getOne);

/**
 * @swagger
 * /notificacao:
 *   post:
 *     summary: Cria uma notificação
 *     tags: [Notificação]
 *     responses:
 *       200:
 *         description: Notificação criada
 */
router.post("/", authMiddleware, notificacaoController.create);

/**
 * @swagger
 * /notificacao:
 *   put:
 *     summary: Atualiza uma notificação
 *     tags: [Notificação]
 *     responses:
 *       200:
 *         description: Notificação atualizada
 */
router.put("/:id", authMiddleware, notificacaoController.update);

/**
 * @swagger
 * /notificacao:
 *   delete:
 *     summary: Exclui uma notificação
 *     tags: [Notificação]
 *     responses:
 *       200:
 *         description: Notificação excluída
 */
router.delete("/:id", authMiddleware, notificacaoController.delete);

/**
 * @swagger
 * /notificacao:
 *   delete:
 *     summary: Exclui notificações
 *     tags: [Notificação]
 *     responses:
 *       200:
 *         description: Notificações excluídas
 */
router.delete("/usuario/:id", authMiddleware, notificacaoController.deleteByUsuario);

export default router;