import { AppDispatch } from '../store';
import { checkingCredentials, login, logout, setAlumnoDatos, setDatos, setDocenteDatos } from './authSlice';
import { loginWithEmailPassword } from '../../firebase/providers';
import { doc, getDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';

interface LoginData {
  email: string;
  password: string;
}

export const startLoginWithEmailPassword = ({email, password}:LoginData):any => {
  return async (dispatch:AppDispatch, getState: any) => {
    dispatch(checkingCredentials());
    const authResultado = await loginWithEmailPassword({email, password});

    if(!authResultado.ok) return dispatch(logout());
    dispatch(findByIdUserData(authResultado.uid!));
    dispatch(login(authResultado))
    // const {alumnosList,bpm,name,rol,status,uid} = await getState().auth;
    // console.log('*******************');
    // console.log('TENGO LOS DATOS?');
    // console.log({alumnosList,bpm,email,name,rol,status,uid});

    // dispatch(logout());
  }
}

const findByIdUserData = (uid:string) => {
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
    console.log({rol});
    if (rol === 'Alumno') {
      dispatch(setAlumnoDatos(datos.data()))
      // console.log('*******************');
      // console.log('AGARRANDO EL ROL /// ENTREEEE findByIdUserData2');
    }
    if (rol === 'Docente') {
      dispatch(setDocenteDatos(datos.data()))
      // console.log('*******************');
      // console.log('AGARRANDO EL ROL /// ENTREEEE 2 findByIdUserData2');
    }
  };
};