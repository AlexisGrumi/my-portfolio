
import { storage } from '../config/firebase.mjs';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Busboy from 'busboy';

// Subir un archivo a Firebase Storage
export const uploadFile = (req, res) => {
  const busboy = Busboy({ headers: req.headers }); // Llama a Busboy como una función
  const fields = {};  // Para almacenar los campos de texto
  const fileData = {};  // Para almacenar los datos del archivo

  // Este evento se ejecuta cuando un campo es recibido en el form-data
  busboy.on('field', (fieldname, val) => {
    fields[fieldname] = val;
  });

  // Este evento se ejecuta cuando un archivo es recibido
  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    const chunks = [];
    
    file.on('data', (chunk) => {
      chunks.push(chunk);  // Agrega los datos del archivo a un array
    });

    file.on('end', () => {
      fileData[fieldname] = Buffer.concat(chunks);  // Almacena los datos completos del archivo
    });
  });

  // Este evento se ejecuta cuando se completa el procesamiento del formulario
  busboy.on('finish', async () => {
    const { uid, folderPath } = fields;  // Extrae los datos del formulario (uid y folderPath)
    const file = fileData['file'];  // Extrae el archivo del formulario

    if (!file) {
      return res.status(400).json({ message: "No se proporcionó un archivo" });
    }

    if (!uid || !folderPath) {
      return res.status(400).json({ message: "Faltan datos requeridos (uid o folderPath)" });
    }

    const fileRef = ref(storage, `${uid}/${folderPath}/${filename}`);

    try {
      // Subir el archivo a Firebase Storage
      const snapshot = await uploadBytes(fileRef, file);
      const fileUrl = await getDownloadURL(snapshot.ref);

      res.status(200).json({
        message: 'Archivo subido exitosamente',
        fileUrl,
      });
    } catch (error) {
      console.error("Error al subir archivo:", error);
      res.status(500).json({ message: 'Error al subir el archivo', error: error.message });
    }
  });

  // Le pasa el cuerpo de la solicitud a busboy para procesarlo
  busboy.end(req.rawBody);
};


// Descargar un archivo desde Firebase Storage
export const downloadFile = async (req, res) => {
  const { uid, folderPath, fileName } = req.params;
  const fileRef = ref(storage, `${uid}/${folderPath}/${fileName}`);

  try {
    const fileUrl = await getDownloadURL(fileRef);
    res.status(200).json({ fileUrl });
  } catch (error) {
    res.status(500).json({ message: 'Error al descargar el archivo', error: error.message });
  }
};
