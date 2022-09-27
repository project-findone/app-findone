/* eslint-disable no-console */
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { SafeAreaView } from '@shared/components/SafeView/index';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import {
  Title, TextBlue, ButtonBlue, Container, Header,
  TextButtonBlue, TextGreen, ButtonGreen, TextButtonGreen, ViewComunicado, TextComunicado,
} from './styles';

export const RegisterMenu: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Container>

        <Header>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-left"
              color="#000"
              type="octicon"
              size={55}
              tvParallaxProperties={undefined}
            />
          </TouchableOpacity>

          <Title>Registro de caso</Title>

        </Header>

        <ButtonBlue>
          <TextButtonBlue>Registrar alguém</TextButtonBlue>
          <TextBlue>Estou procurando por alguém</TextBlue>
        </ButtonBlue>

        <ButtonGreen>
          <TextButtonGreen>Se registrar</TextButtonGreen>
          <TextGreen>Alguém pode estar me procurando</TextGreen>
        </ButtonGreen>

        <ViewComunicado>
          <TextComunicado>
            Comunicamos que falsidade ideológica e falsa comunicação
            de crime também configuram crimes,
            conforme previsão no artigo 299 e 340, respectivamente,
            do Código Penal Brasileiro.
          </TextComunicado>
        </ViewComunicado>

      </Container>
    </SafeAreaView>
  );
};
