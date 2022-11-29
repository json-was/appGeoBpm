import React from 'react';
import {ActivityIndicator, View} from 'react-native';

export const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5856d6',
      }}>
      <ActivityIndicator size={60} color="#fff" />
    </View>
  );
};
