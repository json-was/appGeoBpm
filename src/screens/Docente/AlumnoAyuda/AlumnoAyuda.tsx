import React, {useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Pulsaciones, Map} from '../../../components';
import {alumnoAyudaStyle} from './AlumnoAyuda.style';
import {Picker} from '@react-native-picker/picker';

export const AlumnoAyuda = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const bpmbase = 66;

  return (
    <View style={alumnoAyudaStyle.viewContainer}>
      <ScrollView>
        <Text style={alumnoAyudaStyle.title}>ALUMNO</Text>

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
          <Pulsaciones bpm={bpmbase} />
        </View>

        {/* MAPA */}
        <View style={alumnoAyudaStyle.mapContainer}>
          <Map />
        </View>
      </ScrollView>
    </View>
  );
};
