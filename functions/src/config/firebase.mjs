import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAAfl2E2AH3sgApAO4DozMxbjmYFkx4Y4o",
  authDomain: "portafolio-9252d.firebaseapp.com",
  projectId: "portafolio-9252d",
  storageBucket: "portafolio-9252d.firebasestorage.app",
  messagingSenderId: "895789404130",
  appId: "1:895789404130:web:3a515ff132bbb7e95df3bb",
  measurementId: "G-VDNVRP63C0",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, storage, db };
