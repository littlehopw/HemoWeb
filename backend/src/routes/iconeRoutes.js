import authMiddleware from '../middlewares/authMiddleware.js';
import express from 'express';
import iconeController from '../controllers/iconeController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Ícone
 *   description: Rotas de Ícone
 */

/**
 * @swagger
 * /icone:
 *   get:
 *     summary: Lista ícones
 *     tags: [Ícone]
 *     responses:
 *       200:
 *         description: Lista de ícones
 */
router.get("/", authMiddleware, iconeController.getAll);

/**
 * @swagger
 * /icone:
 *   get:
 *     summary: Lista um ícone
 *     tags: [Ícone]
 *     responses:
 *       200:
 *         description: Lista ícone específico
 */
router.get("/:id", authMiddleware, iconeController.getOne);

/**
 * @swagger
 * /icone:
 *   post:
 *     summary: Cria um ícone
 *     tags: [Ícone]
 *     responses:
 *       200:
 *         description: Cria ícone específico
 */
router.post("/", authMiddleware, iconeController.create);

/**
 * @swagger
 * /icone:
 *   update:
 *     summary: Atualiza um ícone
 *     tags: [Ícone]
 *     responses:
 *       200:
 *         description: Atualiza ícone específico
 */
router.put("/:id", authMiddleware, iconeController.update);

/**
 * @swagger
 * /icone:
 *   delete:
 *     summary: Deleta um ícone
 *     tags: [Ícone]
 *     responses:
 *       200:
 *         description: Deleta ícone específico
 */
router.delete("/:id", authMiddleware, iconeController.delete);

export default router;
