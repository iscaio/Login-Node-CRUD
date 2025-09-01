//const express = require("express");
//const router = express.Router();
//const authController = require("../controllers/auth.controller");

const { Router } = require("express");
const router = Router();
const authController = require("../controllers/auth.controller");

/**
 * @swagger
 * /api/v1/cadastro:
 *   post:
 *     summary: Cadastrar novo usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 */
router.post("/cadastro", authController.register);

/**
 * @swagger
 * /api/v1/login:
 *   post:
 *     summary: Autenticar usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Autenticação bem-sucedida (JWT retornado)
 *       401:
 *         description: Credenciais inválidas
 */
router.post("/login", authController.login);

router.post("/cadastro", authController.register);
router.post("/login", authController.login);

module.exports = router;
