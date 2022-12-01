import {AppDispatch} from '../store';
import {
  checkingCredentials,
  login,
  logout,
  setAlumnoDatos,
  setDatos,
  setDocenteDatos,
  setNewBpm,
} from './authSlice';
import {loginWithEmailPassword, logoutFirebase} from '../../firebase/providers';
import {doc, getDoc, increment, updateDoc} from 'firebase/firestore/lite';
import {FirebaseDB} from '../../firebase/config';
import {cargarLista} from '../studentData/thunks';
import {clearStudent} from '../studentData/studentDataSlice';

interface LoginData {
  email: string;
  password: string;
}

// AUHTENTICATION
export const startLoginWithEmailPassword = ({
  email,
  password,
}: LoginData): any => {
  return async (dispatch: AppDispatch, getState: any) => {
    dispatch(checkingCredentials());
    const authResultado = await loginWithEmailPassword({email, password});

    if (!authResultado.ok) return dispatch(logout());
    dispatch(findByIdUserData(authResultado.uid!));
    dispatch(login(authResultado));
  };
};

export const findByIdUserData = (uid: string): any => {
  return async (dispatch: AppDispatch, getState: any) => {
    const newDoc = doc(FirebaseDB, `userData/${uid}`);
    const datos = await getDoc(newDoc);
    dispatch(setDatos(datos.data()));

    const {rol, alumnosList} = await getState().auth;
    if (rol === 'Alumno') {
      dispatch(setAlumnoDatos(datos.data()));
    }
    if (rol === 'Docente') {
      dispatch(setDocenteDatos(datos.data()));
      dispatch(cargarLista());
    }
  };
};

export const startLogoutFirebase = (): any => {
  return async (dispatch: any) => {
    await logoutFirebase();
    dispatch(logout());
    dispatch(clearStudent());
  };
};

// ALUMNO THUNK
export const sumarBpm = (): any => {
  return async (dispatch: AppDispatch, getState: any) => {
    const {uid, bpm} = await getState().auth;
    const newDoc = doc(FirebaseDB, `userData/${uid}`);
    await updateDoc(newDoc, {
      bpm: increment(10),
    });

    dispatch(actualizarBpm(uid));
  };
};

export const restarBpm = (): any => {
  return async (dispatch: AppDispatch, getState: any) => {
    const {uid, bpm} = await getState().auth;
    const newDoc = doc(FirebaseDB, `userData/${uid}`);
    await updateDoc(newDoc, {
      bpm: increment(-10),
    });

    dispatch(actualizarBpm(uid));
  };
};

export const actualizarBpm = (uid: string): any => {
  return async (dispatch: AppDispatch) => {
    const newDoc = doc(FirebaseDB, `userData/${uid}`);
    const datos = await getDoc(newDoc);
    dispatch(setNewBpm(datos.data()));
  };
};
