import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  scrollContainer: {
    position: 'absolute',
    width: '100%',
    height: 450,
    justifyContent: 'flex-end',
    bottom: 0,
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 20,
    shadowRadius: 10,
    bottom: 0,
  },
  title: {
    fontSize: 22,
    fontWeight: 'medium',
    color: '#1A1A1A',
    textAlign: 'left',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'left',
    marginBottom: 40,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  inputError: {
    borderWidth: 1,
    borderColor: 'red',
  },
  signInButton: {
    backgroundColor: '#D3D3D3',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    height: 45,
    marginTop: 30,
  },
  disabledButton: {
    backgroundColor: '#D3D3D3',
  },
  signInText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
