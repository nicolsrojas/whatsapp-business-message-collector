const admin = require('firebase-admin');
const config = require('./app');

// Inicializar Firebase si aún no está inicializado
if (!admin.apps.length) {
  try {
    if (!config.firebase.serviceAccount) {
      throw new Error('Falta la variable FIREBASE_SERVICE_ACCOUNT');
    }

    const serviceAccount = JSON.parse(config.firebase.serviceAccount);

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: config.firebase.databaseURL,
    });

    console.log('✅ Firebase inicializado correctamente con serviceAccount');

  } catch (error) {
    console.error('❌ Error al inicializar Firebase con serviceAccount:', error.message);

    // Fallback (sin autenticación)
    admin.initializeApp({
      databaseURL: config.firebase.databaseURL,
    });

    console.log('⚠️ Firebase inicializado con fallback sin serviceAccount');
  }
}

const db = admin.database();

module.exports = {
  admin,
  db
};