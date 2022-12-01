import React from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {inicioStyles} from './Inicio.style';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {startLogoutFirebase} from '../../../store/auth/thunks';
import {cargarLista} from '../../../store/studentData/thunks';

export const Inicio = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {listado} = useSelector((state: RootState) => state.studentData);

  const onLogout = () => {
    dispatch(startLogoutFirebase());
  };
  dispatch(cargarLista());

  return (
    <View style={inicioStyles.viewContainer}>
      <Text style={inicioStyles.title}>Alumnos</Text>
      <ScrollView>
        <View style={inicioStyles.buttonSalir}>
          <TouchableOpacity style={inicioStyles.button} onPress={onLogout}>
            <Text style={inicioStyles.buttonTextSalir}>Salir</Text>
          </TouchableOpacity>
        </View>
        {listado?.map(alumno => {
          return (
            <View style={inicioStyles.alumnoContainer} key={alumno.uid}>
              <TouchableOpacity
                style={inicioStyles.button}
                onPress={() =>
                  navigation.navigate('DocenteAlumno', {...alumno})
                }>
                <Text style={inicioStyles.buttonText}>
                  Alumno: {alumno.name}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
