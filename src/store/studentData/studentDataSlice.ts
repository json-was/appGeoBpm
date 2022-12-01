import {createSlice} from '@reduxjs/toolkit';

export interface StudentDataState {
  listado: any[] | null;
  uid: string | null;
  name: string | null;
  bpm: number | null;
}

const initialState: StudentDataState = {
  listado: null,
  uid: null,
  name: null,
  bpm: null,
};

const studentDataSlice = createSlice({
  name: 'studentData',
  initialState,
  reducers: {
    setStudent: (state, {payload}) => {
      state.uid = payload.uid;
      state.name = payload.name;
      state.bpm = payload.bpm;
    },
    clearStudent: state => {
      state.listado = null;
      state.uid = null;
      state.name = null;
      state.bpm = null;
      state.listado = null;
    },
    setListado: (state, {payload}) => {
      state.listado = payload;
    },
  },
});

export const {setStudent, clearStudent, setListado} = studentDataSlice.actions;

export default studentDataSlice.reducer;
