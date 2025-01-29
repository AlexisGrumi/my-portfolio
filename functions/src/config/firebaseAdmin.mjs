import admin from 'firebase-admin';
import path from 'path';

// Ruta a tu archivo de clave de servicio de Firebase
const serviceAccount = path.resolve('config', 'firebase-admin-sdk.json'); // Asegúrate de que el archivo .json esté en la carpeta 'config'

// Inicializa Firebase Admin SDK con las credenciales de servicio
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'portafolio-9252d.appspot.com',  // El bucket de Firebase Storage
});

const bucket = admin.storage().bucket();  // Obtener el bucket de Firebase Storage

export { bucket };  // Exporta el bucket para usarlo en tu backend
