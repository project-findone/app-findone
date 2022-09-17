import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Profile } from 'src/screens/User/Profile';
import { SignIn } from 'src/screens/User/SignIn';
import { SignUp } from 'src/screens/User/SignUp';
import { ForgotPass } from 'src/screens/User/ForgotPass';
import { ResetPass } from 'src/screens/User/ResetPass';
import { VerifyUserEmail } from 'src/screens/User/VerifyUserEmail';
import { EditUser } from 'src/screens/User/EditUser';
import { AuthProvider } from '@shared/hooks/contexts/AuthContext';

export interface ProfileParamsList {
  Profile: undefined
  SignIn: unknown
  SignUp: undefined
  ForgotPass: undefined
  ResetPass: undefined
  VerifyUserEmail: undefined
  EditUser: undefined
}

const ProfileNav = createNativeStackNavigator();

export const ProfileRouter: React.FC = () => (
  <AuthProvider>
    <ProfileNav.Navigator screenOptions={{ headerShown: false }}>
      <ProfileNav.Screen name="ProfileIndex" component={Profile} />
      <ProfileNav.Screen name="SignIn" component={SignIn} />
      <ProfileNav.Screen name="SignUp" component={SignUp} />
      <ProfileNav.Screen name="ForgotPass" component={ForgotPass} />
      <ProfileNav.Screen name="ResetPass" component={ResetPass} />
      <ProfileNav.Screen name="VerifyUserEmail" component={VerifyUserEmail} />
      <ProfileNav.Screen name="EditUser" component={EditUser} />
    </ProfileNav.Navigator>
  </AuthProvider>
);
