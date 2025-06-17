import express from 'express';
import { getProfile, updateProfile, deleteProfile } from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Usuário
 *   description: Rotas de usuário
 */

/**
 * @swagger
 * /hemocentros:
 *   get:
 *     summary: Lista usuário
 *     tags: [Usuário]
 *     responses:
 *       200:
 *         description: Lista usuário 
 */
router.get('/profile', authMiddleware, getProfile);

/**
 * @swagger
 * /hemocentros:
 *   put:
 *     summary: Atualiza usuário
 *     tags: [Usuário]
 *     responses:
 *       200:
 *         description: Usuário atualizado 
 */
router.put('/profile', authMiddleware, updateProfile);

/**
 * @swagger
 * /hemocentros:
 *   delete:
 *     summary: Exclui usuário
 *     tags: [Usuário]
 *     responses:
 *       200:
 *         description: Usuário excluído 
 */
router.delete('/profile', authMiddleware, deleteProfile);

export default router;
