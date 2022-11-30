import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Logo, Background, loginStyles} from './Login.style';
import {useForm} from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { startLoginWithEmailPassword } from '../../store/auth/thunks';

export const Login = () => {
  const dispatch = useDispatch()
  const {alumnosList,bpm,name,rol,status,uid} = useSelector((state:RootState) => state.auth)
  const {email, password, onChange} = useForm({
    email: '',
    password: '',
  });

  const onSubmit = (event: any) => {
    event.preventDefault();
    // console.log({email, password});
    dispatch(startLoginWithEmailPassword({email, password}))
    // console.log('*******************');
    // console.log('login');
    // console.log({alumnosList,bpm,email,name,rol,status,uid});
    
  };

  const datos = () => {
    console.log('*******************');
    console.log('TENGO LOS DATOS?');
    console.log({alumnosList,bpm,email,name,rol,status,uid});
  }

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={loginStyles.formContainer}>
          <Background />
          <Logo />

          <Text style={loginStyles.title}>Login</Text>
          <Text style={loginStyles.label}>Email</Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            placeholder="Ingrese su email"
            placeholderTextColor="rgba(255,255,255,0.4)"
            selectionColor="#fff"
            style={loginStyles.input}
            underlineColorAndroid="#fff"
            onChangeText={value => onChange(value, 'email')}
            value={email}
            onSubmitEditing={onSubmit}
          />

          <Text style={loginStyles.label}>Contraseña</Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="********"
            placeholderTextColor="rgba(255,255,255,0.4)"
            secureTextEntry={true}
            selectionColor="#fff"
            style={loginStyles.input}
            underlineColorAndroid="#fff"
            onChangeText={value => onChange(value, 'password')}
            value={password}
            onSubmitEditing={onSubmit}
          />

          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles.button}
              onPress={onSubmit}>
              <Text style={loginStyles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles.button}
              onPress={datos}>
              <Text style={loginStyles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
