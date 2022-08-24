import { StyleSheet, Platform, StatusBar } from 'react-native';

const SafeView = () => {
  StyleSheet.create({
    AndroidSafeArea: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
  });
};

export default SafeView;
