import React from 'react';
import { useNavigation } from '@react-navigation/native';

import White_logo from '@shared/assets/white_logo.png';
import Background_image from '@shared/assets/background_image.jpeg';

import {
  Background, ButtonProsseguir, Logo, Tittle, TextButton,
} from './styles';

export const FirstScreec: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Background
        source={Background_image}
      />

      <Logo
        source={White_logo}
      />

      <Tittle>Bem Vindo(a)!</Tittle>

      <ButtonProsseguir onPress={() => navigation.navigate('Terms', { initial: true })}>
        <TextButton>PROSSEGUIR</TextButton>
      </ButtonProsseguir>
    </>
  );
};
