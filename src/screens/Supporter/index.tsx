/* eslint-disable no-console */
import React from 'react';

import { SafeAreaView } from '@shared/components/SafeView/index';
import { Icon } from 'react-native-elements';
import {
  Title, ButtonBlue, Container, Header,
  TextButtonBlue, ButtonGreen, TextButtonGreen, ViewButton,
} from './styles';

export const Supporter: React.FC = () => (
  <SafeAreaView>
    <Container>

      <Header>
        <Title>Apoiador</Title>
      </Header>

      <ViewButton>
        <ButtonBlue>
          <Icon
            name="ios-search"
            color="#08B9C3"
            type="ionicon"
            size={70}
            tvParallaxProperties={undefined}
          />
          <TextButtonBlue>Casos envolvidos</TextButtonBlue>
        </ButtonBlue>

        <ButtonGreen>
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
        <ButtonGreen>
          <Icon
            name="people"
            color="#00CFB3"
            type="octicon"
            size={70}
            tvParallaxProperties={undefined}
          />
          <TextButtonGreen>Reconhecer rostos</TextButtonGreen>
        </ButtonGreen>

        <ButtonBlue>
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
