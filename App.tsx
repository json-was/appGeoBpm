import React from 'react'
import { PermissionsProvider } from './src/context';
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
      <Provider store={store} >
        <AppState>
          <RouterApp />
        </AppState>
      </Provider>
    </>
  )
}

export default App;