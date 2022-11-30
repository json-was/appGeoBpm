import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore/lite';
import { FirebaseAuth, FirebaseDB } from './config';


// ESTE ARCHIVO ES PARA REALIZAR OPERACIONES QUE SON DIRECTAMENTE DE FIREBASE

interface LoginData {
  email: string;
  password: string;
}

// AUTHENTICATION
export const loginWithEmailPassword = async ({email, password}: LoginData) => {
  try {
    const respuesta = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    const {uid} = respuesta.user;

    return {
      ok: true,
      uid,
    }
  } catch (error) {
    return {ok: false}
  }
};

export const logoutFirebase = async() => {
  return await FirebaseAuth.signOut();
}