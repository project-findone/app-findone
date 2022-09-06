import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { AuthProvider } from './shared/hooks/contexts/AuthContext';

export default function App() {
  return (
    <>
        <View style={{flex: 1}}>
          <Text>Passou</Text>
        </View>
      <StatusBar/>
    </>
  );
}

