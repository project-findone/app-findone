import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SearchIndex } from 'src/screens/Disappeared/Search/Map';
import { AuthProvider } from '@shared/hooks/contexts/AuthContext';
import { UserProvider } from '@shared/hooks/contexts/UserContext';

export interface SearchParamsList {
  SearchIndex: undefined
}

const SearchNav = createNativeStackNavigator();

type Props = { route: any };

export const SearchRouter: React.FC<Props> = ({ route: params }) => (
  <UserProvider>
    <AuthProvider>
      <SearchNav.Navigator initialRouteName="SearchIndex" screenOptions={{ headerShown: false }}>
        <SearchNav.Screen name="SearchIndex" component={SearchIndex} initialParams={params.params} />
      </SearchNav.Navigator>
    </AuthProvider>
  </UserProvider>
);
