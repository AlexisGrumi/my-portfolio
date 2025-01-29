import express from 'express';
import { getAllDocuments, getFilteredData, addDataToFirestore } from '../controllers/firestoreController.mjs';

const router = express.Router();

// Ruta para obtener todos los documentos de una colección
router.get('/:collectionName', getAllDocuments);

// Ruta para obtener documentos con filtros
router.get('/filter/:collectionName', getFilteredData);

// Ruta para añadir documentos con uid usuario
router.post('/add/:uid/:documentName', addDataToFirestore);

export default router;
