// src/infrastructure/webserver/routes/webhookRoutes.js
const express = require('express');
const router = express.Router();
const webhookController = require('../controllers/webhookController');

// Ruta GET para la verificación del webhook
router.get('/webhook', webhookController.verifyWebhook);

// Ruta POST para recibir los mensajes
router.post('/webhook', webhookController.processWebhook);

module.exports = router;