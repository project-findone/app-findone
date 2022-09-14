/* eslint-disable react/prop-types */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from 'react-native-elements';

import { TouchableOpacity, View } from 'react-native';
import { TabBarStyles } from './styles';

import { AuthNavigation } from './AuthNavigation';

const Tab = createBottomTabNavigator();

interface Props {
  children: React.ReactNode
}

const CustomTabBarButton: React.FC<Props> = ({ children }) => (

  <TouchableOpacity
    style={{ justifyContent: 'center' }}
  >
    <View style={{
      width: 55,
      height: 55,
      borderRadius: 35,
      backgroundColor: '#00B9C6',
      alignItems: 'center',
      marginHorizontal: 15,
    }}
    >
      {children}
    </View>
  </TouchableOpacity>

);

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
        name="Busca"
        component={AuthNavigation}
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
        component={AuthNavigation}
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
        component={AuthNavigation}
        options={{
          tabBarIcon: () => (
            <Icon
              name="megaphone"
              type="octicon"
              tvParallaxProperties={undefined}
              size={24}
              color="#FFF"
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarShowLabel: false,
          tabBarLabel: () => null,
        }}
      />

      <Tab.Screen
        name="Apoiador"
        component={AuthNavigation}
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
        component={AuthNavigation}
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
  </NavigationContainer>
);
