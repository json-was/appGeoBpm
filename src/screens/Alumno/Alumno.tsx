import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Map, Pulsaciones} from '../../components';
import {alumnoStyles} from './Alumno.style';
import {useDispatch, useSelector} from 'react-redux';
import {
  startLogoutFirebase,
  sumarBpm,
  restarBpm,
} from '../../store/auth/thunks';
import {RootState} from '../../store/store';

export const Alumno = () => {
  const dispatch = useDispatch();
  const {bpm, uid, email} = useSelector((state: RootState) => state.auth);

  const onLogout = () => {
    dispatch(startLogoutFirebase());
  };

  const sumar = () => {
    dispatch(sumarBpm());
  };

  const restar = () => {
    dispatch(restarBpm());
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
      <Pulsaciones bpm={bpm!} />

      {/* MAPA */}
      <View style={alumnoStyles.mapContainer}>
        <Map />
      </View>
    </View>
  );
};
