import { storage } from '../config/firebase.mjs';
import { bucket } from '../config/firebaseAdmin.mjs';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadFile = async (req, res) => {
  try {
    console.log("req completo: ", req)
    // if (!req.files || !req.files.file) {
    //   return res.status(400).json({ error: "No se encontró el archivo" });
    // }

    const file = req.files.file;
    const { uid, folder } = req.body;

    if (!uid || !folder) {
      return res.status(400).json({ error: "Faltan datos requeridos (uid, folder)" });
    }

    // Crear la ruta en Firebase Storage
    const filePath = `${uid}/${folder}/${file.name}`;
    const fileUpload = bucket.file(filePath);

    // Subir archivo
    const stream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });

    stream.on("error", (err) => {
      console.error("Error al subir archivo:", err);
      return res.status(500).json({ error: "Error al subir archivo" });
    });

    stream.on("finish", async () => {
      // Hacer que el archivo sea accesible públicamente
      await fileUpload.makePublic();
      const publicUrl = `https://storage.googleapis.com/${storage.name}/${filePath}`;

      res.status(200).json({
        message: "Archivo subido exitosamente",
        url: publicUrl,
      });
    });

    stream.end(file.data);
  } catch (error) {
    console.error("Error en el servidor:", error);
    return res.status(500).json({
      error: error.message,
      request: {
        method: req.method,
        url: req.originalUrl,
        headers: req.headers,
        body: req.body,
        query: req.query,
        params: req.params
      }
    });
  }
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
