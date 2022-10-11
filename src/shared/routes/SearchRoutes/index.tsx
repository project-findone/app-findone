import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SearchIndex } from 'src/screens/Disappeared/Search';
import { Filter } from 'src/screens/Disappeared/Filter';
import { AuthProvider } from '@shared/hooks/contexts/AuthContext';
import { FirstScreec } from 'src/screens/Initials/Welcome';
import { Terms } from 'src/screens/User/Terms';

export interface RegisterParamsList {
  SearchIndex: undefined
  Filter: undefined
  Terms: {
    initial: boolean
  }
}

const SearchNav = createNativeStackNavigator();

export const SearchRouter: React.FC = () => (
  <AuthProvider>
    <SearchNav.Navigator initialRouteName="FirstScreen" screenOptions={{ headerShown: false }}>
      <SearchNav.Screen name="SearchIndex" component={SearchIndex} />
      <SearchNav.Screen name="FirstScreen" component={FirstScreec} />
      <SearchNav.Screen name="Terms" component={Terms} />
      <SearchNav.Screen name="Filter" component={Filter} />
    </SearchNav.Navigator>
  </AuthProvider>
);
