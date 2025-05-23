const { server } = require('./infrastructure/webserver/server');
const { db } = require('./infrastructure/config/firebase');
const config = require('./infrastructure/config/app');

// Verificar la conexión a Firebase
db.ref('.info/connected').on('value', (snapshot) => {
  const connected = snapshot.val();
  if (connected) {
    console.log('Conexión a Firebase Realtime Database establecida');
  } else {
    console.warn('Desconectado de Firebase Realtime Database');
  }
});

// Iniciar la aplicación
console.log(`Iniciando WhatsApp Logger en modo ${config.server.environment}`);

// Manejar cierre elegante
process.on('SIGINT', () => {
  console.log('Cerrando la aplicación...');
  server.close(() => {
    console.log('Servidor HTTP cerrado');
    process.exit(0);
  });
});

module.exports = { server };