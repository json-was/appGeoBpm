import {StyleSheet} from 'react-native';

export const inicioStyles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#5856d6',
  },
  alumnoContainer: {
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#eee',
    height: 60,
    justifyContent: 'center',
  },
  title: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
    paddingBottom: 5,
    paddingLeft: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonSalir: {
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#ff8000',
    height: 60,
    justifyContent: 'center',
  },
  buttonText: {
    marginLeft: 20,
    color: '#1e1e1e',
    fontSize: 18,
  },
  buttonTextSalir: {
    marginLeft: 20,
    color: '#fff',
    fontSize: 18,
  },
});
