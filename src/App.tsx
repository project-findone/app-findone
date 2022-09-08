import React from 'react';
import {StatusBar} from 'expo-status-bar';

import {Router} from './shared/routes';
import { View } from 'react-native';

export default function App() {
	return (
		<View style={{ flex: 1, minHeight: '600px'}}>
			<Router />
			<StatusBar/>
		</View>
	);
}

