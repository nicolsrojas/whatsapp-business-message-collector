const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

// Importar rutas
const webhookRoutes = require('./routes/webhookRoutes');

// Crear la aplicación Express
const app = express();

// Middlewares
app.use(helmet()); // Seguridad
app.use(cors()); // Permitir CORS
app.use(bodyParser.json()); // Parsear JSON
app.use(morgan('combined')); // Logging

// Rutas
app.use('/', webhookRoutes);

// Ruta de verificación de salud
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'WhatsApp Webhook Server funcionando correctamente' });
});

// Manejo de errores
app.use((err, req, res, _next) => {
  console.error('Error no controlado:', err);
  res.status(500).json({
    status: 'error',
    message: 'Error interno del servidor',
    error: process.env.NODE_ENV === 'production' ? {} : err
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

// Exportar para testing
module.exports = { app, server };