import React from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {inicioStyles} from './Inicio.style';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/auth/authSlice';

const alumnosDatos = [
  {
    id: 1,
    name: 'Marco',
    bpm: 77,
  },
  {
    id: 2,
    name: 'Jason',
    bpm: 66,
  },
  {
    id: 3,
    name: 'Diego',
    bpm: 89,
  },
  {
    id: 4,
    name: 'Martin',
    bpm: 55,
  },
];

export const Inicio = () => {

  const dispatch = useDispatch();

  setTimeout( () => {
    dispatch(logout())
  }, 5000)

  return (
    <View style={inicioStyles.viewContainer}>
      <Text style={inicioStyles.title}>Alumnos</Text>
      <ScrollView>
        {alumnosDatos?.map(({id, name, bpm}: any) => {
          return (
            <View style={inicioStyles.alumnoContainer} key={id}>
              <TouchableOpacity style={inicioStyles.button}>
                <Text style={inicioStyles.buttonText}>Alumno: {name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
