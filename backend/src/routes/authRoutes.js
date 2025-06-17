import express from 'express';
import { cadastro, login } from '../controllers/authController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Logis/Cadastro
 *   description: Rotas de Login/Cadastro
 */

/**
 * @swagger
 * /hemocentros:
 *   get:
 *     summary: Realiza Cadastro
 *     tags: [Login/Cadastro]
 *     responses:
 *       200:
 *         description: Cadastro realizado com sucesso
 */
router.post('/cadastro', cadastro);

/**
 * @swagger
 * /hemocentros:
 *   get:
 *     summary: Realiza Login
 *     tags: [Login/Cadastro]
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 */
router.post('/login', login);

export default router;