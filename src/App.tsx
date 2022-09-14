import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { View } from 'react-native';
import { Router } from './shared/routes';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Router />
      <StatusBar />
    </View>
  );
}
