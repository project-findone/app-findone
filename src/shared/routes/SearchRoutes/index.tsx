import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SearchIndex } from 'src/screens/Disappeared/Search';
import { Filter } from 'src/screens/Disappeared/Filter';
import { AuthProvider } from '@shared/hooks/contexts/AuthContext';

export interface RegisterParamsList {
  SearchIndex: undefined
  Filter: undefined
}

const SearchNav = createNativeStackNavigator();

export const SearchRouter: React.FC = () => (
  <AuthProvider>
    <SearchNav.Navigator initialRouteName="SearchIndex" screenOptions={{ headerShown: false }}>
      <SearchNav.Screen name="SearchIndex" component={SearchIndex} />
      <SearchNav.Screen name="Filter" component={Filter} />
    </SearchNav.Navigator>
  </AuthProvider>
);
