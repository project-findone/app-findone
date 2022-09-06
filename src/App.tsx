import React from 'react';
import {StatusBar} from 'expo-status-bar';

import {Router} from './shared/routes';

export default function App() {
	return (
		<>
			<Router />
			<StatusBar/>
		</>
	);
}

