import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Profile } from 'src/screens/User/Profile';
import { SignIn } from 'src/screens/User/SignIn';
import { SignUp } from 'src/screens/User/SignUp';
import { ForgotPass } from 'src/screens/User/ForgotPass';
import { ResetPass } from 'src/screens/User/ResetPass';
import { VerifyUserEmail } from 'src/screens/User/VerifyUserEmail';
import { EditUser } from 'src/screens/User/EditUser';
import { Filter } from 'src/screens/Disappeared/Filter';
import { RegisterCase } from 'src/screens/Disappeared/RegisterCase';
import { List } from 'src/screens/Disappeared/List';
import { AuthProvider } from '@shared/hooks/contexts/AuthContext';

export interface ProfileParamsList {
  ProfileIndex: undefined
  SignIn: unknown
  SignUp: undefined
  ForgotPass: undefined
  ResetPass: undefined
  VerifyUserEmail: undefined
  EditUser: undefined
  Filter: undefined
  RegisterCase: undefined
  List: undefined
}

const ProfileNav = createNativeStackNavigator();

export const ProfileRouter: React.FC = () => (
  <AuthProvider>
    <ProfileNav.Navigator initialRouteName="List" screenOptions={{ headerShown: false }}>
      <ProfileNav.Screen name="ProfileIndex" component={Profile} />
      <ProfileNav.Screen name="SignIn" component={SignIn} />
      <ProfileNav.Screen name="SignUp" component={SignUp} />
      <ProfileNav.Screen name="ForgotPass" component={ForgotPass} />
      <ProfileNav.Screen name="ResetPass" component={ResetPass} />
      <ProfileNav.Screen name="VerifyUserEmail" component={VerifyUserEmail} />
      <ProfileNav.Screen name="EditUser" component={EditUser} />
      <ProfileNav.Screen name="Filter" component={Filter} />
      <ProfileNav.Screen name="RegisterCase" component={RegisterCase} />
      <ProfileNav.Screen name="List" component={List} />
    </ProfileNav.Navigator>
  </AuthProvider>
);
