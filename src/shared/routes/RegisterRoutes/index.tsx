import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RegisterMenuIndex } from 'src/screens/Disappeared/RegisterMenu';
import { AuthProvider } from '@shared/hooks/contexts/AuthContext';
import { RegisterCase } from 'src/screens/Disappeared/RegisterCase';

const Stack = createNativeStackNavigator();

export const RegisterRouter: React.FC = () => (
  <AuthProvider>
    <Stack.Navigator initialRouteName="RegisterMenuIndex" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RegisterMenuIndex" component={RegisterMenuIndex} />
      <Stack.Screen name="RegisterCase" component={RegisterCase} />
    </Stack.Navigator>
  </AuthProvider>
);
