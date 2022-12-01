import {createSlice} from '@reduxjs/toolkit';

export interface AuthState {
  status: string;
  uid: string | null;
  email: string | null;
  name: string | null;
  rol: string | null;
  bpm: number | null;
  alumnosList: string[] | null;
  errorMessage: string | null;
}

const initialState: AuthState = {
  status: 'checking',
  uid: null,
  email: null,
  name: null,
  rol: null,
  bpm: null,
  alumnosList: null,
  errorMessage: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, {payload}) => {
      state.status = 'authenticated';
      state.uid = payload.uid;
      state.email = payload.email;
      state.errorMessage = null;
    },
    logout: state => {
      state.status = 'not-authenticated';
      state.uid = null;
      state.email = null;
      state.name = null;
      state.rol = null;
      state.bpm = null;
      state.alumnosList = null;
      state.errorMessage = null;
    },
    checkingCredentials: state => {
      state.status = 'checking';
    },
    setDatos: (state, {payload}) => {
      state.name = payload.name;
      state.rol = payload.rol;
    },
    setAlumnoDatos: (state, {payload}) => {
      state.bpm = payload.bpm;
    },
    setDocenteDatos: (state, {payload}) => {
      state.alumnosList = payload.alumnosList;
    },
    setNewBpm: (state, {payload}) => {
      state.bpm = payload.bpm;
    },
  },
});

export const {
  login,
  logout,
  checkingCredentials,
  setDatos,
  setAlumnoDatos,
  setDocenteDatos,
  setNewBpm,
} = authSlice.actions;

export default authSlice.reducer;
