import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Profile } from 'src/screens/User/Profile';
import { SignIn } from 'src/screens/User/SignIn';
import { SignUp } from 'src/screens/User/SignUp';
import { ForgotPass } from 'src/screens/User/ForgotPass';
import { ResetPass } from 'src/screens/User/ResetPass';
import { VerifyUserEmail } from 'src/screens/User/VerifyUserEmail';
import { AuthProvider } from '@shared/hooks/contexts/AuthContext';
import { RegistSelf } from 'src/screens/Disappeared/RegistSelf';
import { ChangeDisappearData } from 'src/screens/Disappeared/ChangeDisappearData';

export interface ProfileParamsList {
  ProfileIndex: undefined
  SignIn: unknown
  SignUp: undefined
  RegistSelf: undefined
  ForgotPass: undefined
  ChangeDisappearData: undefined
  ResetPass: undefined
  VerifyUserEmail: undefined
  List: undefined
  CaseInformation: undefined
}

const ProfileNav = createNativeStackNavigator();

export const ProfileRouter: React.FC = () => (
  <AuthProvider>
    <ProfileNav.Navigator initialRouteName="ProfileIndex" screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#fff' } }}>
      <ProfileNav.Screen name="ProfileIndex" component={Profile} />
      <ProfileNav.Screen name="RegistSelf" component={RegistSelf} />
      <ProfileNav.Screen name="ChangeDisappearData" component={ChangeDisappearData} />
      <ProfileNav.Screen name="SignIn" component={SignIn} />
      <ProfileNav.Screen name="SignUp" component={SignUp} />
      <ProfileNav.Screen name="ForgotPass" component={ForgotPass} />
      <ProfileNav.Screen name="ResetPass" component={ResetPass} />
      <ProfileNav.Screen name="VerifyUserEmail" component={VerifyUserEmail} />
    </ProfileNav.Navigator>
  </AuthProvider>
);
