import React, {useContext} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { PermissionsContext } from '../../context';

export const Permisos = () => {
  const {permissions, askLocationPermission} = useContext(PermissionsContext);

  return (
    <View style={styles.container}>
      <Text>Permisos</Text>

      <Button title="Permiso" onPress={askLocationPermission} />
      <Text>{JSON.stringify(permissions, null, 5)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
