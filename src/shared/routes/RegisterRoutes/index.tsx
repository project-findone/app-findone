import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RegisterMenuIndex } from 'src/screens/Disappeared/RegisterMenu';
import { UserProvider } from '@shared/hooks/contexts/CaseContext';
import { RegisterCase } from 'src/screens/Disappeared/RegisterCase';

export interface RegisterParamsList {
  RegisterMenuIndex: undefined
  RegisterCase: undefined
}

const Stack = createNativeStackNavigator();

export const RegisterRouter: React.FC = () => (
  <UserProvider>
    <Stack.Navigator initialRouteName="RegisterMenuIndex" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RegisterMenuIndex" component={RegisterMenuIndex} />
      <Stack.Screen name="RegisterCase" component={RegisterCase} />
    </Stack.Navigator>
  </UserProvider>
);
