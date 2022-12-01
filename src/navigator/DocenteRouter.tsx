import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Loading} from '../components/Loading/Loading';
import {Alumno} from '../screens/Alumno/Alumno';
import {Inicio} from '../screens/Docente/Inicio/Inicio';
import { AlumnoAyuda } from '../screens';

const Stack = createNativeStackNavigator();

export const DocenteRouter = () => {
  const {rol} = useSelector((state: RootState) => state.auth);

  if (rol === null) {
    return <Loading />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="DocenteInicio" component={Inicio} />
        <Stack.Screen name="DocenteAlumno" component={AlumnoAyuda} />
    </Stack.Navigator>
  );
};
