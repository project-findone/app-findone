import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Ionicons from '@expo/vector-icons/Ionicons';

import { TabBarStyles } from './styles';

import { AuthNavigation } from './AuthNavigation';

const BottomNav = createBottomTabNavigator();

export const Router: React.FC = () => (
	<NavigationContainer>
		<BottomNav.Navigator
		screenOptions={{
				tabBarLabelPosition: "below-icon",
				tabBarStyle: TabBarStyles.TabBarStyle,
				tabBarIconStyle: TabBarStyles.TabBarIconStyle,
				tabBarLabelStyle: TabBarStyles.TabBarLabelStyle,
				tabBarActiveTintColor: "#009AA5",
				tabBarInactiveTintColor: "#7D7D7E",

				title: 'Perfil',
				headerShown: false,
			}}>
			<BottomNav.Screen name="Profile" component={AuthNavigation}
			options={{tabBarIcon: (props: {size: number, color: string}) =>
				<Ionicons name="person-outline" size={props.size} color={props.color}/>}}
			/>
		</BottomNav.Navigator>
	</NavigationContainer>
);
