import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Loading} from '../components/Loading/Loading';
import {Alumno} from '../screens/Alumno/Alumno';
import {Inicio} from '../screens/Docente/Inicio/Inicio';

const Stack = createNativeStackNavigator();

export const RolRouter = () => {
  const {rol} = useSelector((state: RootState) => state.auth);

  if (rol === null) {
    return <Loading />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {rol === 'Docente' ? (
        <Stack.Screen name="DocenteInicio" component={Inicio} />
      ) : (
        <Stack.Screen name="Alumno" component={Alumno} />
      )}
    </Stack.Navigator>
  );
};
