import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RegisterMenuIndex } from 'src/screens/Disappeared/RegisterMenu';
import { UserProvider } from '@shared/hooks/contexts/UserContext';
import { RegisterCase } from 'src/screens/Disappeared/RegisterCase';
import { SupporterAd } from 'src/screens/Supporter/SupporterAd';
import { Verify } from 'src/screens/Disappeared/RegisterMenu/Verify';

export interface RegisterParamsList {
  RegisterMenuIndex: undefined
  RegisterCase: undefined
  SupporterAd: undefined
}

const Stack = createNativeStackNavigator();

export const RegisterRouter: React.FC = () => (
  <UserProvider>
    <Stack.Navigator initialRouteName="Verify" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RegisterMenuIndex" component={RegisterMenuIndex} />
      <Stack.Screen name="RegisterCase" component={RegisterCase} />
      <Stack.Screen name="SupporterAd" component={SupporterAd} />
      <Stack.Screen name="Verify" component={Verify} />
    </Stack.Navigator>
  </UserProvider>
);
