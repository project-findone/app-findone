import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Supporter } from 'src/screens/Supporter';
import { InvolvedCases } from 'src/screens/Supporter/InvolvedCases';
import { Ranking } from 'src/screens/Supporter/Ranking';
import { AuthProvider } from '@shared/hooks/contexts/AuthContext';
import { Certified } from 'src/screens/Supporter/Certified';

export interface SupporterParamsList {
  SupporterIndex: undefined
  InvolvedCases: undefined
  RecognizeFaces: undefined
  Certified: undefined
  Ranking: undefined
}

const SupprterNav = createNativeStackNavigator();

export const SupporterRouter: React.FC = () => (
  <AuthProvider>
    <SupprterNav.Navigator initialRouteName="SupporterIndex" screenOptions={{ headerShown: false }}>
      <SupprterNav.Screen name="SupporterIndex" component={Supporter} />
      <SupprterNav.Screen name="InvolvedCases" component={InvolvedCases} />
      <SupprterNav.Screen name="Ranking" component={Ranking} />
      <SupprterNav.Screen name="Certified" component={Certified} />
    </SupprterNav.Navigator>
  </AuthProvider>
);
