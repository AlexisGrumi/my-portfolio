import express from 'express';
import { uploadFile, downloadFile } from '../controllers/storageController.mjs';

const router = express.Router();

router.post("/upload", uploadFile);

// Ruta para descargar archivo
router.get('/download/:folderPath/:fileName', downloadFile);

export default router;