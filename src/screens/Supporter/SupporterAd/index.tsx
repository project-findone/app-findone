/* eslint-disable no-console */
import React from 'react';
import logoGold from '@shared/assets/goldIconFindone.png';
import { useNavigation } from '@react-navigation/native';

import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import {
  BtnConceder, BtnNaopermitir, DivButtons,
  Textbtn2, TextbtnConceder, Title, Container, LogoGold,
  List, TopContainer, Item, ItemText,
} from './styles';

export const SupporterAd: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container style={{ padding: '11%', alignItems: 'center' }}>
      <TopContainer>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: 'absolute', left: 0 }}
        >
          <Icon
            name="arrow-left"
            color="#000"
            type="octicon"
            size={60}
            tvParallaxProperties={undefined}
          />
        </TouchableOpacity>
        <LogoGold
          source={logoGold}
        />
      </TopContainer>

      <Title>
        Torne-se um Apoiador!
        {'\n'}
        Crie uma conta e desbloqueie:
      </Title>

      <List>
        <Item>
          <Icon
            name="person-add-outline"
            color="#08B9C3"
            type="ionicon"
            size={32}
            tvParallaxProperties={undefined}
          />
          <ItemText color="#08B9C3">Cadastro de Casos</ItemText>
        </Item>
        <Item>
          <Icon
            name="md-chatbox-ellipses-outline"
            color="#00CFB3"
            type="ionicon"
            size={32}
            tvParallaxProperties={undefined}
          />
          <ItemText color="#00CFB3">Chat de Comunicação</ItemText>
        </Item>
        <Item>
          <Icon
            name="ios-search"
            color="#08B9C3"
            type="ionicon"
            size={32}
            tvParallaxProperties={undefined}
          />
          <ItemText color="#08B9C3">Casos Envolvidos</ItemText>
        </Item>
        <Item>
          <Icon
            name="people"
            color="#00CFB3"
            type="octicon"
            size={32}
            tvParallaxProperties={undefined}
          />
          <ItemText color="#00CFB3">Reconhecer Rostos</ItemText>
        </Item>
        <Item>
          <Icon
            name="newspaper-variant-multiple-outline"
            color="#08B9C3"
            type="material-community"
            size={32}
            tvParallaxProperties={undefined}
          />
          <ItemText color="#08B9C3">Certificado</ItemText>
        </Item>
      </List>

      <DivButtons>

        <BtnConceder onPress={() => navigation.navigate('Profile')}>
          <TextbtnConceder>
            Cadastre-se
          </TextbtnConceder>
        </BtnConceder>

        <BtnNaopermitir onPress={() => navigation.goBack()}>
          <Textbtn2>
            Não, obrigado
          </Textbtn2>
        </BtnNaopermitir>

      </DivButtons>
    </Container>
  );
};
