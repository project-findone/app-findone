import React, { useState } from 'react';

import White_logo from '@shared/assets/white_logo.png';
import Background_image from '@shared/assets/background_image.jpeg';

import { Modal } from 'react-native';
import {
  Background, ButtonProsseguir, Logo, Tittle, TextButton,
} from './styles';

export const Welcome: React.FC = () => {
  const [welcomeVisible, setWelcomeVisible] = useState(true);

  return (
    <Modal
      visible={welcomeVisible}
      onRequestClose={() => {
        setWelcomeVisible(!welcomeVisible);
      }}
    >
      <Background
        source={Background_image}
      />

      <Logo
        source={White_logo}
      />

      <Tittle>Bem Vindo(a)!</Tittle>

      <ButtonProsseguir onPress={() => setWelcomeVisible(!welcomeVisible)}>
        <TextButton>PROSSEGUIR</TextButton>
      </ButtonProsseguir>
    </Modal>
  );
};
