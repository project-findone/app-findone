import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SearchIndex } from 'src/screens/Disappeared/Search';
import { AuthProvider } from '@shared/hooks/contexts/AuthContext';

export interface SearchParamsList {
  SearchIndex: undefined
  Filter: undefined
  Terms: {
    initial: boolean
  }
}

const SearchNav = createNativeStackNavigator();

type Props = { route: any };

export const SearchRouter: React.FC<Props> = ({ route: params }) => (
  <AuthProvider>
    <SearchNav.Navigator initialRouteName="SearchIndex" screenOptions={{ headerShown: false }}>
      <SearchNav.Screen name="SearchIndex" component={SearchIndex} initialParams={params.params} />
    </SearchNav.Navigator>
  </AuthProvider>
);
