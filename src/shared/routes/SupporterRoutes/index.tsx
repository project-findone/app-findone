import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Supporter } from 'src/screens/Supporter';
import { InvolvedCases } from 'src/screens/Supporter/InvolvedCases';
import { Ranking } from 'src/screens/Supporter/Ranking';
import { AuthProvider } from '@shared/hooks/contexts/AuthContext';
import { RecognizeFaces } from 'src/screens/Supporter/RecognizeFaces';

export interface SupporterParamsList {
  SupporterIndex: undefined
  InvolvedCases: undefined
  RecognizeFaces: undefined
}

const SearchNav = createNativeStackNavigator();

export const SupporterRouter: React.FC = () => (
  <AuthProvider>
    <SearchNav.Navigator initialRouteName="SupporterIndex" screenOptions={{ headerShown: false }}>
      <SearchNav.Screen name="SupporterIndex" component={Supporter} />
      <SearchNav.Screen name="InvolvedCases" component={InvolvedCases} />
      <SearchNav.Screen name="Ranking" component={Ranking} />
      <SearchNav.Screen name="RecognizeFaces" component={RecognizeFaces} />
    </SearchNav.Navigator>
  </AuthProvider>
);
