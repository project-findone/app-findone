import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 10,
    width: '100%',
    marginTop: 25,
    borderRadius: 30,
    backgroundColor: '#1CB8C2',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  label: {
    color: '#545454',
    fontSize: 16,
    margin: 8,
  },
  cadastro: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  text2: {
    color: '#8F8F8F',
    fontSize: 16,
  },
  textlink1: {
    color: '#00C2C6',
    fontSize: 16,
  },
  textlink: {
    color: '#00C2C6',
    fontSize: 16,
    marginTop: '5%',
    textAlign: 'right',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    padding: 4,
  },
  divInput: {
    width: '100%',
    height: 60,
    marginTop: 15,
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
