import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RegisterMenuIndex } from 'src/screens/Disappeared/RegisterMenu';
import { RegisterCase } from 'src/screens/Disappeared/RegisterCase';
import { AuthProvider } from '@shared/hooks/contexts/AuthContext';

export interface RegisterParamsList {
  RegisterMenu: undefined
  RegisterCase: undefined
}

const RegisterNav = createNativeStackNavigator();

export const RegisterRouter: React.FC = () => (
  <AuthProvider>
    <RegisterNav.Navigator screenOptions={{ headerShown: false }}>
      <RegisterNav.Screen name="RegisterMenuIndex" component={RegisterMenuIndex} />
      <RegisterNav.Screen name="RegisterCase" component={RegisterCase} />
    </RegisterNav.Navigator>
  </AuthProvider>
);
