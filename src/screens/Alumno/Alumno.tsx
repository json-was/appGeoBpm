import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Map, Pulsaciones} from '../../components';
import {alumnoStyles} from './Alumno.style';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/auth/authSlice';

export const Alumno = () => {
  const dispatch = useDispatch();
  const [bpm, setBpm] = useState(60);

  const onLogout = () => {
    dispatch(logout())
  };

  const sumar = () => {
    setBpm(bpm + 3);
  };

  const restar = () => {
    setBpm(bpm - 3);
  };

  return (
    <View style={alumnoStyles.viewContainer}>
      <View>
        <TouchableOpacity activeOpacity={0.8} onPress={onLogout}>
          <Text style={alumnoStyles.buttonText}>Salir</Text>
        </TouchableOpacity>
      </View>
      <Text style={alumnoStyles.title}>ALUMNO</Text>

      {/* Botones */}
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={alumnoStyles.button}
          onPress={sumar}>
          <Text style={alumnoStyles.buttonText}>+10 BPM</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={alumnoStyles.button}
          onPress={restar}>
          <Text style={alumnoStyles.buttonText}>-10 BPM</Text>
        </TouchableOpacity>
      </View>

      {/* BMP */}
      <Pulsaciones bpm={bpm} />

      {/* MAPA */}
      <View style={alumnoStyles.mapContainer}>
        <Map />
      </View>
    </View>
  );
};
