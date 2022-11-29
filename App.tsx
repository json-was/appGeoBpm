import React from 'react'
import { Loading, Logout, Permisos } from './src/components';
import { PermissionsProvider } from './src/context';
import { Alumno, Login } from './src/screens';
import { NavigationContainer } from '@react-navigation/native'
import { Navigator } from './src/navigator/Navigator';

const AppState = ({children}:any) => {
  return (
    <PermissionsProvider>
      {children}
    </PermissionsProvider>
  )
}

const App = () => {
  return (
    <>
      {/* <Login /> */}
      {/* <Logout /> */}

        {/* <Alumno /> */}
      {/* <Loading /> */}
      {/* <Permisos /> */}
      <NavigationContainer>
        <AppState>
          <Navigator/>
        </AppState>
      </NavigationContainer>
    </>
  )
}

export default App;