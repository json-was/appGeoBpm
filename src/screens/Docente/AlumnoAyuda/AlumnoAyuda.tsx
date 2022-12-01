import React, {useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Pulsaciones, Map} from '../../../components';
import {alumnoAyudaStyle} from './AlumnoAyuda.style';
import {Picker} from '@react-native-picker/picker';
import {useDispatch, useSelector} from 'react-redux';
import {actualizarAlumnoItem} from '../../../store/studentData/thunks';
import {RootState} from '../../../store/store';

export const AlumnoAyuda = ({route, navigation}: any) => {
  const dispatch = useDispatch();
  const {name, bpm} = useSelector((state: RootState) => state.studentData);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const {uid} = route.params;

  dispatch(actualizarAlumnoItem(uid!));

  const navegacion = () => {
    navigation.navigate('DocenteInicio');
  };
  return (
    <View style={alumnoAyudaStyle.viewContainer}>
      <ScrollView>
        <View style={alumnoAyudaStyle.buttonContainerAtras}>
          <TouchableOpacity
            style={alumnoAyudaStyle.button}
            onPress={navegacion}>
            <Text style={alumnoAyudaStyle.buttonTextAtras}>{'< atras'}</Text>
          </TouchableOpacity>
        </View>
        <Text style={alumnoAyudaStyle.title}>ALUMNO: {name}</Text>

        {/* PICKER */}
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedLanguage(itemValue);
          }}
          style={alumnoAyudaStyle.picker}>
          <Picker.Item label="Esperando" value="Esperando" />
          <Picker.Item label="Conteniendo" value="Conteniendo" />
          <Picker.Item label="Contenido" value="Contendio" />
        </Picker>

        <View style={alumnoAyudaStyle.buttonContainer}>
          <TouchableOpacity style={alumnoAyudaStyle.button}>
            <Text style={alumnoAyudaStyle.buttonText}>Cambiar estado</Text>
          </TouchableOpacity>
        </View>

        {selectedLanguage === 'Conteniendo' ? (
          <View style={alumnoAyudaStyle.buttonContainer}>
            <TouchableOpacity style={alumnoAyudaStyle.button}>
              <Text style={alumnoAyudaStyle.buttonText}>Solicitar ayuda</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <></>
        )}

        {/* BMP */}
        <View style={{alignItems: 'center'}}>
          <Pulsaciones bpm={bpm} />
        </View>

        {/* MAPA */}
        <View style={alumnoAyudaStyle.mapContainer}>
          <Map />
        </View>
      </ScrollView>
    </View>
  );
};
