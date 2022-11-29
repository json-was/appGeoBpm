import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PermissionsContext} from '../context';
import { Loading, Permisos } from '../components';
import { Alumno } from '../screens';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  const {permissions} = useContext(PermissionsContext);

  if (permissions.locationStatus === 'unavailable') {
    return <Loading />;
  }

  return (
    <Stack.Navigator
      initialRouteName="Permisos"
      screenOptions={{
        headerShown: false,
      }}>
        {
          (permissions.locationStatus === 'granted')
          ? <Stack.Screen name="Alumno" component={Alumno} />
          : <Stack.Screen name="Permisos" component={Permisos} />
        }
    </Stack.Navigator>
  );
};
