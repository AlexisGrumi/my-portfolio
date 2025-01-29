import { db } from '../config/firebase.mjs';
import { getFirestore, collection, getDocs, query, where, doc, writeBatch, setDoc } from 'firebase/firestore';

// Obtener todos los documentos de una colección
export const getAllDocuments = async (req, res) => {
    const { collectionName } = req.params;

    try {
        const collectionRef = collection(db, collectionName);
        const querySnapshot = await getDocs(collectionRef);

        const documents = [];
        querySnapshot.forEach(doc => {
            documents.push({ id: doc.id, ...doc.data() });
        });

        res.status(200).json({
            message: 'Datos obtenidos con éxito',
            data: documents,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener los datos',
            error: error.message,
        });
    }
};

// Obtener documentos con filtros
export const getFilteredData = async (req, res) => {
    const { field, operator, value, collectionName } = req.query;

    if (!collectionName) {
        return res.status(400).json({ message: "El nombre de la colección es obligatorio." });
    }

    const validOperators = ['<', '<=', '==', '>', '>=', '!=', 'array-contains', 'array-contains-any', 'in', 'not-in'];
    if (!validOperators.includes(operator)) {
        return res.status(400).json({ message: "Operador no válido" });
    }

    try {
        const collectionRef = collection(db, collectionName);
        const q = query(collectionRef, where(field, operator, value));
        const querySnapshot = await getDocs(q);
        const results = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        res.status(200).json({
            message: "Datos obtenidos con éxito",
            data: results,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los datos",
            error: error.message,
        });
    }
};

export const addDataToFirestore = async (req, res) => {
    const { uid, documentName } = req.params;
    const dataObject = req.body; // Los datos vienen como un objeto clave-valor
  
    try {
      // Validar que se hayan enviado datos
      if (typeof dataObject !== 'object' || Object.keys(dataObject).length === 0) {
        return res.status(400).json({ message: 'No se enviaron datos para agregar.' });
      }
  
      // Crear una referencia al documento con el UID
      const docRef = doc(db, documentName, uid);
  
      // Guardar los datos en el documento, sobrescribiendo si ya existe
      await setDoc(docRef, dataObject);
  
      // Enviar respuesta de éxito
      return res.status(200).json({
        message: 'Datos agregados correctamente',
        data: dataObject,
      });
    } catch (error) {
      // Enviar respuesta en caso de error
      return res.status(500).json({
        message: 'Error al agregar los datos',
        error: error.message,
      });
    }
  };