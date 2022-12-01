import React from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {inicioStyles} from './Inicio.style';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {startLogoutFirebase} from '../../../store/auth/thunks';

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

export const Inicio = () => {
  const dispatch = useDispatch();
  const {alumnosList} = useSelector((state: RootState) => state.auth);

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
        {alumnosList?.map(id => {
          return (
            <View style={inicioStyles.alumnoContainer} key={id}>
              <TouchableOpacity style={inicioStyles.button}>
                <Text style={inicioStyles.buttonText}>Alumno: {id}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
