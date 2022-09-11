import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from 'src/pages/Mobile/SignIn';
import { Register } from 'src/pages/Mobile/SignUp';
import { ForgotPass } from 'src/pages/Mobile/ForgotPass';
import { ResetPass } from 'src/pages/Mobile/ResetPass';
import { AuthProvider } from '../../hooks/contexts/AuthContext';

export type RootStackParamList = {
  SignIn: undefined
  SignUp: undefined
  ForgotPass: undefined
  ResetPass: undefined
};

const Auth = createNativeStackNavigator<RootStackParamList>();

export const AuthNavigation: React.FC = () => (
  <AuthProvider>
    <Auth.Navigator initialRouteName="ResetPass" screenOptions={{ headerShown: false }}>
      <Auth.Screen name="SignIn" component={Login} />
      <Auth.Screen name="SignUp" component={Register} />
      <Auth.Screen name="ForgotPass" component={ForgotPass} />
      <Auth.Screen name="ResetPass" component={ResetPass} />
    </Auth.Navigator>
  </AuthProvider>
);
