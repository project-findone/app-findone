import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { AuthProvider } from './shared/hooks/contexts/AuthContext';

export default function App() {
  return (
    <>
      <AuthProvider>
        <View style={{flex: 1}}>
        </View>
      </AuthProvider>
      <StatusBar/>
    </>
  );
}

