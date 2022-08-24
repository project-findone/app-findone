import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Email } from './pages/Email';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ cardStyle: { backgroundColor: '#fff' } }}
      >
        <Stack.Screen name="Email" component={Email} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
