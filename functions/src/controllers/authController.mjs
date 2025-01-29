import { auth } from '../config/firebase.mjs';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const idToken = await user.getIdToken();

    res.status(200).json({
      message: "Inicio de sesión exitoso",
      user: {
        uid: user.uid,
        email: user.email,
        idToken,
      },
    });
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      res.status(401).json({ message: "Contraseña incorrecta" });
    } else if (error.code === 'auth/user-not-found') {
      res.status(401).json({ message: "Usuario no encontrado" });
    } else {
      res.status(500).json({ message: "Error al iniciar sesión", error: error.message });
    }
  }
};

export const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Crea un nuevo usuario con el email y la contraseña proporcionada
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const idToken = await user.getIdToken();

    res.status(201).json({
      message: "Registro exitoso",
      user: {
        uid: user.uid,
        email: user.email,
        idToken,
      },
    });
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      res.status(400).json({ message: "El correo electrónico ya está en uso" });
    } else if (error.code === 'auth/invalid-email') {
      res.status(400).json({ message: "Correo electrónico inválido" });
    } else {
      res.status(500).json({ message: "Error al registrar el usuario", error: error.message });
    }
  }
};