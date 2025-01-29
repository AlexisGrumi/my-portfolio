import functions from 'firebase-functions';
import app from './src/app.mjs';

export const api = functions.https.onRequest(app);