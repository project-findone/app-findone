import React from 'react';
import logoGold from '@shared/assets/goldIconFindone.png';

import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import {
  Container, LogoGold, Text, TextBold, BtnAbout, TextBtnAbout,
  IconArea,
} from './styles';
import { SafeAreaView } from '../SafeView';

export const SupportMsg: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <IconArea>
        <Icon
          onPress={() => navigation.goBack()}
          name="arrow-left"
          color="#000"
          type="feather"
          size={65}
          tvParallaxProperties={undefined}
        />
      </IconArea>

      <Container>

        <LogoGold source={logoGold} />
        <Text>
          Função disponível somente para
          {' '}
          <TextBold>Apoiadores</TextBold>

        </Text>
        <BtnAbout onPress={() => navigation.navigate('SupporterAd')}>
          <TextBtnAbout>
            Saiba Mais

          </TextBtnAbout>
          <Icon
            name="arrow-right"
            color="#5C5C5C"
            type="feather"
            size={30}
            tvParallaxProperties={undefined}
          />
        </BtnAbout>
      </Container>
    </SafeAreaView>
  );
};

export default SupportMsg;
