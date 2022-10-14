import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import { Cases } from 'src/screens/Supporter/Cases';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Filter } from 'src/screens/Disappeared/Filter';
import { About } from 'src/screens/User/About';
import { EditUser } from 'src/screens/User/EditUser';
import { ButtonRegister } from '../components/ButtonRegister';
import { TabBarStyles } from './styles';

import { ProfileRouter } from './ProfileRoutes';
import { SearchRouter } from './SearchRoutes';
import { RegisterRouter } from './RegisterRoutes';
import { SupporterRouter } from './SupporterRoutes';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTabs: React.FC = () => (
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
      name="Search"
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
        tabBarStyle: { display: 'none' },
      }}
    />

    <Tab.Screen
      name="Supporter"
      component={SupporterRouter}
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
);

export const Router: React.FC = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeTabs} />
    <Stack.Screen name="Filter" component={Filter} />
    <Stack.Screen name="About" component={About} />
    <Stack.Screen name="EditUser" component={EditUser} />
  </Stack.Navigator>
);
