import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import { Cases } from 'src/screens/Supporter/Cases';
import { Supporter } from 'src/screens/Supporter';

import { ButtonRegister } from '../components/ButtonRegister';
import { TabBarStyles } from './styles';

import { ProfileRouter } from './ProfileRoutes';
import { RegisterRouter } from './RegisterRoutes';
import { SearchRouter } from './SearchRoutes';

const Tab = createBottomTabNavigator();

export const Router: React.FC = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: TabBarStyles.TabBarStyle,
        tabBarIconStyle: TabBarStyles.TabBarIconStyle,
        tabBarLabelStyle: TabBarStyles.TabBarLabelStyle,
        tabBarActiveTintColor: '#009AA5',
        tabBarInactiveTintColor: '#7D7D7E',

        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Filter"
        component={SearchRouter}
        options={{
          title: 'Busca',
          tabBarIcon: (props: { color: string }) => (
            <Icon
              name="search"
              type="octicon"
              tvParallaxProperties={undefined}
              size={24}
              color={props.color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Cases"
        component={Cases}
        options={{
          title: 'Casos',
          tabBarIcon: (props: { color: string }) => (
            <Icon
              name="people"
              type="octicon"
              tvParallaxProperties={undefined}
              size={24}
              color={props.color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="RegisterMenu"
        component={RegisterRouter}
        options={{
          title: 'Registrar Caso',
          tabBarIcon: () => (
            <ButtonRegister />
          ),
          tabBarLabel: () => null,
        }}
      />

      <Tab.Screen
        name="Supporter"
        component={Supporter}
        options={{
          title: 'Apoiador',
          tabBarIcon: (props: { color: string }) => (
            <Icon
              name="message-alert-outline"
              type="material-community"
              tvParallaxProperties={undefined}
              size={24}
              color={props.color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileRouter}
        options={{
          title: 'Perfil',
          tabBarIcon: (props: { color: string }) => (
            <Icon
              name="person-outline"
              type="ionicon"
              tvParallaxProperties={undefined}
              size={24}
              color={props.color}
            />
          ),
        }}
      />

    </Tab.Navigator>
  </NavigationContainer>
);
