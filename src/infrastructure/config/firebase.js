const admin = require('firebase-admin');
const config = require('./app');
const { decodeBase64ToJson } = require("../utils/decodeBase64ToJson");

// Inicializar Firebase si aún no está inicializado
if (!admin.apps.length) {
  try {
    let serviceAccount;

    if (config.firebase.serviceAccount) {
      serviceAccount = JSON.parse(config.firebase.serviceAccount);
    } else if (config.firebase.serviceAccountBase64) {
      serviceAccount = decodeBase64ToJson(config.firebase.serviceAccountBase64);
    } else {
      throw new Error('Falta la variable FIREBASE_SERVICE_ACCOUNT o FIREBASE_SERVICE_ACCOUNT_BASE64');
    }

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