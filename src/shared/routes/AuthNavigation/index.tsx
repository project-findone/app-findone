import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from 'src/pages/Mobile/Auth/SignIn';
import { Register } from 'src/pages/Mobile/Auth/SignUp';
import { ForgotPass } from 'src/pages/Mobile/Auth/ForgotPass';
import { ResetPass } from 'src/pages/Mobile/Auth/ResetPass';
import { Edit } from 'src/pages/Mobile/Auth/Edit';
import { AuthProvider } from '../../hooks/contexts/AuthContext';

export type RootStackParamList = {
  SignIn: undefined
  SignUp: undefined
  ForgotPass: undefined
  ResetPass: undefined
  Edit: undefined
};

const Auth = createNativeStackNavigator<RootStackParamList>();

export const AuthNavigation: React.FC = () => (
  <AuthProvider>
    <Auth.Navigator initialRouteName="Edit" screenOptions={{ headerShown: false }}>
      <Auth.Screen name="SignIn" component={Login} />
      <Auth.Screen name="SignUp" component={Register} />
      <Auth.Screen name="ForgotPass" component={ForgotPass} />
      <Auth.Screen name="ResetPass" component={ResetPass} />
      <Auth.Screen name="Edit" component={Edit} />
    </Auth.Navigator>
  </AuthProvider>
);
