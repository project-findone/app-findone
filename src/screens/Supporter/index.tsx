import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { SafeAreaView } from '@shared/components/SafeView/index';
import { Icon } from 'react-native-elements';
import {
  Title, Button, Container, Header,
  TextButton, ViewButton,
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
          <Button onPress={() => navigation.navigate('InvolvedCases')} color="#08B9C3">
            <Icon
              name="ios-search"
              color="#08B9C3"
              type="ionicon"
              size={50}
              tvParallaxProperties={undefined}
            />
            <TextButton color="#08B9C3">Casos Envolvidos</TextButton>
          </Button>

          <Button onPress={() => navigation.navigate('Ranking')} color="#00CFB3">
            <Icon
              name="trophy-outline"
              color="#00CFB3"
              type="ionicon"
              size={50}
              tvParallaxProperties={undefined}
            />
            <TextButton color="#00CFB3">Ranking</TextButton>
          </Button>

          <Button onPress={() => navigation.navigate('Certified')} color="#08B9C3">
            <Icon
              name="newspaper-variant-multiple-outline"
              color="#08B9C3"
              type="material-community"
              size={50}
              tvParallaxProperties={undefined}
            />
            <TextButton color="#08B9C3">Certificado</TextButton>
          </Button>
        </ViewButton>

      </Container>
    </SafeAreaView>
  );
};
