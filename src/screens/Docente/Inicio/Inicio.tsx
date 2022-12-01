import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {inicioStyles} from './Inicio.style';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {startLogoutFirebase} from '../../../store/auth/thunks';
import { cargarLista } from '../../../store/studentData/thunks';

// const alumnosList = [
//   {
//     id: 1,
//     name: 'Marco',
//     bpm: 77,
//   },
//   {
//     id: 2,
//     name: 'Jason',
//     bpm: 66,
//   },
//   {
//     id: 3,
//     name: 'Diego',
//     bpm: 89,
//   },
//   {
//     id: 4,
//     name: 'Martin',
//     bpm: 55,
//   },
// ];

export const Inicio = ({navigation}:any) => {
  const dispatch = useDispatch();
  const {listado} = useSelector((state: RootState) => state.studentData);

  const onLogout = () => {
    dispatch(startLogoutFirebase());
  };

  return (
    <View style={inicioStyles.viewContainer}>
      <Text style={inicioStyles.title}>Alumnos</Text>
      <ScrollView>
        <View style={inicioStyles.buttonSalir}>
          <TouchableOpacity style={inicioStyles.button} onPress={onLogout}>
            <Text style={inicioStyles.buttonTextSalir}>Salir</Text>
          </TouchableOpacity>
        </View>
        {listado?.map((alumno) => {
          return (
            <View style={inicioStyles.alumnoContainer} key={alumno.uid}>
              <TouchableOpacity
                style={inicioStyles.button}
                onPress={() => navigation.navigate('DocenteAlumno', {...alumno})}
              >
                <Text style={inicioStyles.buttonText}>Alumno: {alumno.name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
