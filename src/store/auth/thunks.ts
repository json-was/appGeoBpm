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
    // const {alumnosList,bpm,name,rol,status,uid} = await getState().auth;
    // console.log('*******************');
    // console.log('TENGO LOS DATOS?');
    // console.log({alumnosList,bpm,email,name,rol,status,uid});

    // dispatch(logout());
  };
};

export const findByIdUserData = (uid: string): any => {
  return async (dispatch: AppDispatch, getState: any) => {
    const newDoc = doc(FirebaseDB, `userData/${uid}`);
    const datos = await getDoc(newDoc);
    dispatch(setDatos(datos.data()));
    // console.log('*******************');
    // console.log('findByIdUserData');
    // console.log(datos.data());

    const {rol} = await getState().auth;
    // console.log('*******************');
    // console.log('AGARRANDO EL ROL findByIdUserData2');
    // console.log({rol});
    if (rol === 'Alumno') {
      dispatch(setAlumnoDatos(datos.data()));
      // console.log('*******************');
      // console.log('AGARRANDO EL ROL /// ENTREEEE findByIdUserData2');
    }
    if (rol === 'Docente') {
      dispatch(setDocenteDatos(datos.data()));
      // console.log('*******************');
      // console.log('AGARRANDO EL ROL /// ENTREEEE 2 findByIdUserData2');
    }
  };
};

export const startLogoutFirebase = (): any => {
  return async (dispatch: any) => {
    await logoutFirebase();
    dispatch(logout());
  };
};


// ALUMNO THUNK
export const sumarBpm = ():any => {
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

export const actualizarBpm = (uid:string): any => {
  return async (dispatch: AppDispatch) => {
    const newDoc = doc(FirebaseDB, `userData/${uid}`);
    const datos = await getDoc(newDoc);

    // console.log('ACTUALIZAR');
    // console.log(datos.data());
    dispatch(setNewBpm(datos.data()));
  };
};
