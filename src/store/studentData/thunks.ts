import {AppDispatch} from '../store';
import {FirebaseDB} from '../../firebase/config';
import {getDoc, doc} from 'firebase/firestore/lite';
import {setListado} from './studentDataSlice';

export const cargarLista = (): any => {
  return async (dispatch: AppDispatch, getState: any) => {
    const {alumnosList} = await getState().auth;
    const listaPrevia: any[] = [];
    if (alumnosList !== null) {
      for (let index = 0; index < alumnosList.length; index++) {
        const newDoc = doc(FirebaseDB, `userData/${alumnosList[index]}`);
        const datos = await getDoc(newDoc);
        const base = {
          uid: alumnosList[index],
          ...datos.data(),
        };
        listaPrevia.push(base);
      }
      // console.log(listaPrevia);
      dispatch(setListado(listaPrevia));
    }
  };
};
