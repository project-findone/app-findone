import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: '8%',
    paddingTop: 20,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    padding: 10,
    width: '100%',
    marginTop: 25,
    borderRadius: 30,
    backgroundColor: '#1CB8C2',
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
    height: 70,
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
    position: 'absolute',
    backgroundColor: '#fff',
    paddingHorizontal: 6,
    marginLeft: 18,
    marginTop: -9,
  },
  scrollview: {
    height: '100%',
    width: '100%',
  },
});

export default styles;
