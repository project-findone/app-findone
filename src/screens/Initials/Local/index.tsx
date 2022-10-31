/* eslint-disable no-console */
import React from 'react';
import IconMap from '@shared/assets/iconMap.png';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';

import {
  BtnConceder, BtnNaopermitir, Description, DivButtons,
  Mapalogo, Textbtn2, TextbtnConceder, Title, Container,
} from './styles';

export const LocalModal: React.FC = () => {
  const navigation = useNavigation();

  async function getLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      try {
        const location = await Location.getCurrentPositionAsync();
        navigation.navigate('Home', { origin: location.coords });
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <Container style={{ padding: '11%', alignItems: 'center' }}>
      <Mapalogo
        source={IconMap}
      />

      <Title>
        Acesso a
        {'\n'}
        Localização
      </Title>

      <Description>
        Para melhor proveito do nosso app, conceda acesso a sua localização.
      </Description>

      <DivButtons>

        <BtnConceder onPress={() => getLocation()}>
          <TextbtnConceder>
            CONCEDER ACESSO
          </TextbtnConceder>
        </BtnConceder>

        <BtnNaopermitir onPress={() => navigation.navigate('Home')}>
          <Textbtn2>
            Não permitir
          </Textbtn2>
        </BtnNaopermitir>

      </DivButtons>
    </Container>
  );
};
