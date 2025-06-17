const express = require("express");

const router = express.Router();

const notificacaoController = require("../controllers/notificacaoController");


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
router.get("/", notificacaoController.getAll);

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
router.get("/:id", notificacaoController.getOne);

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
router.post("/", notificacaoController.create);

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
router.put("/:id", notificacaoController.update);

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
router.delete("/:id", notificacaoController.delete);

module.exports = router;
