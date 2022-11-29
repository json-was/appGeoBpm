import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import { logoutStyles } from './Logout.style';

export const Logout = () => {

  const onLogout = () => {
  };

  return (
    <View
      style={logoutStyles.container}>
      <View style={logoutStyles.buttonContainer}>
        <TouchableOpacity
          style={logoutStyles.button}
          onPress={onLogout}>
          <Text style={logoutStyles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
