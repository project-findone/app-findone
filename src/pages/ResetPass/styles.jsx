import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 9,
    width: '100%',
    borderRadius: 30,
    borderColor: '#00B9C6',
    borderWidth: 3.5,
    marginTop: 80,
  },
  text: {
    color: '#00B9C6',
    fontWeight: 600,
    fontSize: 20,
  },
  divInput1: {
    width: '100%',
    height: 60,
    marginTop: 55,
  },
  divInput: {
    width: '100%',
    height: 60,
    marginTop: 20,
  },
  input: {
    height: '80%',
    borderWidth: 2,
    borderColor: '#A7A7A7',
    borderRadius: 6,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  titleInput: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    paddingHorizontal: 6,
    marginBottom: -9,
    marginLeft: 18,
    zIndex: 1,
  },
});

export default styles;
