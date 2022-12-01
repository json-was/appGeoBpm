import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export const Logo = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={require('../../assets/logo_login.png')}
        style={{
          width: 110,
          height: 100,
          resizeMode: 'contain',
        }}
      />
    </View>
  );
};

export const Background = () => {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: '#5856d6',
        top: -350,
        width: 1000,
        height: 1200,
        transform: [{rotate: '-70deg'}],
      }}
    />
  );
};

export const loginStyles = StyleSheet.create({
  formContainer: {
    flex: 1,
    height: 600,
    justifyContent: 'center',
    marginBottom: 50,
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 25,
  },
  input: {
    color: '#fff',
    fontSize: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    borderColor: '#fff',
    borderRadius: 100,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
