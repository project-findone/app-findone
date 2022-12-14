import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import White_logo from '@shared/assets/white_logo.png';
import Background_image from '@shared/assets/background_image.jpeg';

import {
  Background, ButtonProsseguir, Logo, Tittle, TextButton,
} from './styles';

export const Welcome: React.FC = () => {
  const navigation = useNavigation();

  (async () => {
    const value = await AsyncStorage.getItem('firstTime');
    console.log(value);
    if (value) { navigation.navigate('Home'); }
  })();

  return (
    <>
      <Background
        source={Background_image}
      />

      <Logo
        source={White_logo}
      />

      <Tittle>Bem Vindo(a)!</Tittle>

      <ButtonProsseguir onPress={() => navigation.navigate('Terms', { initial: 'true' })}>
        <TextButton>PROSSEGUIR</TextButton>
      </ButtonProsseguir>
    </>
  );
};
