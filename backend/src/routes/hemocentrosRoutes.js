const express = require("express");

const router = express.Router();

const hemocentrosController = require("../controllers/hemocentrosController");

/**
 * @swagger
 * tags:
 *   name: Hemocentros
 *   description: Rotas de Hemocentros
 */

/**
 * @swagger
 * /hemocentros:
 *   get:
 *     summary: Lista Hemocentros
 *     tags: [Hemocentros]
 *     responses:
 *       200:
 *         description: Lista de Hemocentros
 */
router.get("/", hemocentrosController.getAll);

/**
 * @swagger
 * /hemocentros:
 *   get:
 *     summary: Lista um Hemocentro
 *     tags: [Hemocentros]
 *     responses:
 *       200:
 *         description: Hemocentro específico
 */
router.get("/:id", hemocentrosController.getOne);

/**
 * @swagger
 * /hemocentros:
 *   post:
 *     summary: Criar Hemocentro
 *     tags: [Hemocentros]
 *     responses:
 *       200:
 *         description: Hemocentro criado
 */
router.post("/", hemocentrosController.create);

/**
 * @swagger
 * /hemocentros:
 *   put:
 *     summary: Atualiza Hemocentros
 *     tags: [Hemocentros]
 *     responses:
 *       200:
 *         description: Hemocentros atualizado
 */
router.put("/:id", hemocentrosController.update);

/**
 * @swagger
 * /hemocentros:
 *   delete:
 *     summary: Exclui Hemocentro
 *     tags: [Hemocentros]
 *     responses:
 *       200:
 *         description: Hemocentro excluído
 */
router.delete("/:id", hemocentrosController.delete);

module.exports = router;
