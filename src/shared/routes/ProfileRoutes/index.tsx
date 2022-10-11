import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Profile } from 'src/screens/User/Profile';
import { SignIn } from 'src/screens/User/SignIn';
import { SignUp } from 'src/screens/User/SignUp';
import { ForgotPass } from 'src/screens/User/ForgotPass';
import { ResetPass } from 'src/screens/User/ResetPass';
import { VerifyUserEmail } from 'src/screens/User/VerifyUserEmail';
import { EditUser } from 'src/screens/User/EditUser';
import { RegisterCase } from 'src/screens/Disappeared/RegisterCase';
import { AuthProvider } from '@shared/hooks/contexts/AuthContext';

import { About } from 'src/screens/User/About';
import { Terms } from 'src/screens/User/Terms';

export interface ProfileParamsList {
  ProfileIndex: undefined
  SignIn: unknown
  SignUp: undefined
  ForgotPass: undefined
  ResetPass: undefined
  VerifyUserEmail: undefined
  EditUser: undefined
  RegisterCase: undefined
  List: undefined
  About: undefined
  Terms: undefined
  CaseInformation: undefined
}

const ProfileNav = createNativeStackNavigator();

export const ProfileRouter: React.FC = () => (
  <AuthProvider>
    <ProfileNav.Navigator initialRouteName="Profileindex" screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#fff' } }}>
      <ProfileNav.Screen name="ProfileIndex" component={Profile} />
      <ProfileNav.Screen name="SignIn" component={SignIn} />
      <ProfileNav.Screen name="SignUp" component={SignUp} />
      <ProfileNav.Screen name="ForgotPass" component={ForgotPass} />
      <ProfileNav.Screen name="ResetPass" component={ResetPass} />
      <ProfileNav.Screen name="VerifyUserEmail" component={VerifyUserEmail} />
      <ProfileNav.Screen name="EditUser" component={EditUser} />
      <ProfileNav.Screen name="RegisterCase" component={RegisterCase} />
      <ProfileNav.Screen name="About" component={About} />
      <ProfileNav.Screen name="Terms" component={Terms} initialParams={{ initial: false }} />
    </ProfileNav.Navigator>
  </AuthProvider>
);
