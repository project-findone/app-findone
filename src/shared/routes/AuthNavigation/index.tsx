import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from 'src/pages/Mobile/Auth/SignIn';
import { Register } from 'src/pages/Mobile/Auth/SignUp';
import { ForgotPass } from 'src/pages/Mobile/Auth/ForgotPass';
import { ResetPass } from 'src/pages/Mobile/Auth/ResetPass';
import { Edit } from 'src/pages/Mobile/Auth/Edit';
import { Image } from 'src/pages/Mobile/Auth/Image';
import { VerifyEmail } from 'src/pages/Mobile/Auth/VerifyEmail';

import { AuthProvider } from '../../hooks/contexts/AuthContext';

export type RootStackParamList = {
  SignIn: undefined
  SignUp: undefined
  ForgotPass: undefined
  ResetPass: undefined
  Edit: undefined
  Image: undefined
  VerifyEmail: undefined
};

const Auth = createNativeStackNavigator<RootStackParamList>();

export const AuthNavigation: React.FC = () => (

  <Auth.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
    <AuthProvider>
      <Auth.Screen name="SignIn" component={Login} />
      <Auth.Screen name="SignUp" component={Register} />
      <Auth.Screen name="VerifyEmail" component={VerifyEmail} />
      <Auth.Screen name="ForgotPass" component={ForgotPass} />
      <Auth.Screen name="ResetPass" component={ResetPass} />
      <Auth.Screen name="Edit" component={Edit} />
      <Auth.Screen name="Image" component={Image} />
    </AuthProvider>
  </Auth.Navigator>
);
