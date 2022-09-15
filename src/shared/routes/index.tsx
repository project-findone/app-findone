import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'react-native-elements';

import { Search } from 'src/screens/Search';
import { Cases } from 'src/screens/Cases';
import { Apoiador } from 'src/screens/Apoiador';
import { Profile } from 'src/screens/Profile';

import { Register } from 'src/screens/Register';
import { SignUp } from 'src/screens/SignUp';
import { SignIn } from 'src/screens/SignIn';
import { propsNavigationStack } from './Models';

import { ButtonRegister } from '../components/ButtonRegister';

import { TabBarStyles } from './styles';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<propsNavigationStack>();

function Tabs() {
  return (
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
        name="Busca"
        component={Search}
        options={{
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
        name="Casos"
        component={Cases}
        options={{
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
        name="Registrar"
        component={Register}
        options={{
          tabBarIcon: () => (
            <ButtonRegister />
          ),
          tabBarLabel: () => null,
        }}
      />

      <Tab.Screen
        name="Apoiador"
        component={Apoiador}
        options={{
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
        name="Perfil"
        component={Profile}
        options={{
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
}

export const Router: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  </NavigationContainer>
);
