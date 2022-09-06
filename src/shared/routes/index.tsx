import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { Login } from 'src/pages/Mobile/SignIn';
import { AuthProvider } from '../hooks/contexts/AuthContext'

export type RootStackParamList = {
	SignIn: undefined
	SignUp: undefined
}

const Auth = createNativeStackNavigator<RootStackParamList>();

export const Router: React.FC = () => (
	<NavigationContainer>
		<AuthProvider>
			<Auth.Navigator initialRouteName='SignIn' screenOptions={{headerTitle: "Logar"}}>
				<Auth.Screen name="SignIn" component={Login} />
				<Auth.Screen name="SignUp" component={Login} />
			</Auth.Navigator>
		</AuthProvider>
	</NavigationContainer>
);
