import React from 'react'
import { Loading, Logout, Permisos } from './src/components';
import { PermissionsProvider } from './src/context';
import { Alumno, AlumnoAyuda, Inicio, Login } from './src/screens';
import { NavigationContainer } from '@react-navigation/native'
import { Navigator } from './src/navigator/Navigator';
import { store } from './src/store/store';
import { Provider } from 'react-redux';
import { RouterApp } from './src/navigator/RouterApp';

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
      {/* <NavigationContainer>
        <AppState>
          <Navigator/>
        </AppState>
      </NavigationContainer> */}
      {/* <Inicio /> */}
      {/* <AlumnoAyuda /> */}
      <Provider store={store} >
        <RouterApp />
      </Provider>
    </>
  )
}

export default App;