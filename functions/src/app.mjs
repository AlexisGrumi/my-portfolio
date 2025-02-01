import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes.mjs';
import storageRoutes from './routes/storageRoutes.mjs';
import firestoreRoutes from './routes/firestoreRoutes.mjs';
import cors from 'cors';
 // Firebase asigna este puerto automáticamente

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/storage', storageRoutes);
app.use('/api/firestore', firestoreRoutes);

app.get('/', (req, res) => {
    res.send('¡Hola, Mundo!');
});
b  
app.post('/useUp', (req, res) => {
    res.send('hole: ', JSON.stringify(req, null, 2))
})


export default app;