const express = require("express");

const router = express.Router();

const iconeController = require("../controllers/iconeController");


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
router.get("/", iconeController.getAll);

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
router.get("/:id", iconeController.getOne);

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
router.post("/", iconeController.create);

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
router.put("/:id", iconeController.update);

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
router.delete("/:id", iconeController.delete);

module.exports = router;
