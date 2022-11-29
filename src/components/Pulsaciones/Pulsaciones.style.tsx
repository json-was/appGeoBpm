import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export const Heart = () => {
  return (
    <View>
      <Image
        source={require('../../assets/heart.png')}
        style={{
          width: 30,
          height: 30,
          resizeMode: 'contain',
        }}
      />
    </View>
  );
};

export const bpmStyles = StyleSheet.create({
  bpmContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'cyan',
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 12,
    borderColor: '#ffffff',
    marginVertical: 20,
  },
  bpmContainerAlert: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'cyan',
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 12,
    borderColor: '#f72929',
    marginVertical: 20,
  },
  bpmNum: {
    color: '#fff',
    fontSize: 50,
  },
  bpmText: {
    color: '#fff',
    fontSize: 25,
  },
});
