import React from 'react';
import {
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
  StyleSheet,
  Text,
} from 'react-native';

interface Props {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

// BOTON NEGRO EN EL MAPA QUE DICE 'ICONO'

export const Fab = ({onPress, style = {}}: Props) => {
  return (
    <View style={{...(style as any)}}>
      <TouchableOpacity onPress={onPress} style={styles.blackButton}>
        <Text style={{color: '#fff', textAlign: 'center'}}>Icono</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  blackButton: {
    zIndex: 9999,
    height: 50,
    width: 50,
    backgroundColor: '#1e1e1e',
    borderRadius: 100,
    justifyContent: 'center',
    alignContent: 'center',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
