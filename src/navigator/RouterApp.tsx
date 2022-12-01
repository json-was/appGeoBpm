import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../screens';
import {RolRouter} from './RolRouter';
import {Loading} from '../components/Loading/Loading';
import { useCheckAuth } from '../hooks/useCheckAuth';

const Stack = createNativeStackNavigator();

export const RouterApp = () => {
  const status = useCheckAuth();

  if (status === 'checking') {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {status === 'authenticated' ? (
        <RolRouter />
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SignIn" component={Login} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
