import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { SafeAreaView } from '@shared/components/SafeView/index';
import { Icon } from 'react-native-elements';
import {
  Title, ButtonBlue, Container, Header,
  TextButtonBlue, ButtonGreen, TextButtonGreen, ViewButton,
} from './styles';

export const Supporter: React.FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Container>

        <Header>
          <Title>Apoiador</Title>
        </Header>

        <ViewButton>
          <ButtonBlue onPress={() => navigation.navigate('InvolvedCases')}>
            <Icon
              name="ios-search"
              color="#08B9C3"
              type="ionicon"
              size={70}
              tvParallaxProperties={undefined}
            />
            <TextButtonBlue>Casos Envolvidos</TextButtonBlue>
          </ButtonBlue>

          <ButtonGreen onPress={() => navigation.navigate('Ranking')}>
            <Icon
              name="trophy-outline"
              color="#00CFB3"
              type="ionicon"
              size={70}
              tvParallaxProperties={undefined}
            />
            <TextButtonGreen>Ranking</TextButtonGreen>
          </ButtonGreen>
        </ViewButton>

        <ViewButton>
          <ButtonGreen onPress={() => navigation.navigate('RecognizeFaces')}>
            <Icon
              name="people"
              color="#00CFB3"
              type="octicon"
              size={70}
              tvParallaxProperties={undefined}
            />
            <TextButtonGreen>Reconhecer rostos</TextButtonGreen>
          </ButtonGreen>

          <ButtonBlue onPress={() => navigation.navigate('Certified')}>
            <Icon
              name="newspaper-variant-multiple-outline"
              color="#08B9C3"
              type="material-community"
              size={70}
              tvParallaxProperties={undefined}
            />
            <TextButtonBlue>Certificado</TextButtonBlue>
          </ButtonBlue>
        </ViewButton>

      </Container>
    </SafeAreaView>
  );
};
