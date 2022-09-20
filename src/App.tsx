import React, { useCallback } from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { RootSiblingParent } from 'react-native-root-siblings';

import { Theme } from '@shared/theme';
import { Router } from './shared/routes';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const onLayoutLoaded = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutLoaded}>
      <RootSiblingParent>
        <ThemeProvider theme={Theme}>
          <Router />
          <StatusBar />
        </ThemeProvider>
      </RootSiblingParent>
    </View>
  );
};

export default App;
