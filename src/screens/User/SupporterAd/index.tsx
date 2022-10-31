/* eslint-disable no-console */
import React from 'react';
import logoGold from '@shared/assets/goldIconFindone.png';
import { useNavigation } from '@react-navigation/native';

import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  BtnConceder, BtnNaopermitir, Description, DivButtons,
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
      </Title>

      <Description>
        Ajude outras pessoas em seus casos e desbloqueie os seguintes recursos:
      </Description>

      <List>
        <Item>
          <Icon
            name="md-chatbox-ellipses-outline"
            color="#00CFB3"
            type="ionicon"
            size={40}
            tvParallaxProperties={undefined}
          />
          <ItemText color="#00CFB3">Chat de Comunicação</ItemText>
        </Item>
        <Item>
          <Icon
            name="ios-search"
            color="#08B9C3"
            type="ionicon"
            size={40}
            tvParallaxProperties={undefined}
          />
          <ItemText color="#08B9C3">Casos Envolvidos</ItemText>
        </Item>
        <Item>
          <Icon
            name="people"
            color="#00CFB3"
            type="octicon"
            size={40}
            tvParallaxProperties={undefined}
          />
          <ItemText color="#00CFB3">Reconhecer Rostos</ItemText>
        </Item>
        <Item>
          <Icon
            name="newspaper-variant-multiple-outline"
            color="#08B9C3"
            type="material-community"
            size={40}
            tvParallaxProperties={undefined}
          />
          <ItemText color="#08B9C3">Certificado</ItemText>
        </Item>
      </List>

      <DivButtons>

        <LinearGradient
          style={{
            height: '52%',
            width: '90%',
            borderRadius: 30,
          }}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          locations={[0.2, 0.8]}
          colors={['#E1BB00', '#D0AD01']}
        >
          <BtnConceder>
            <TextbtnConceder>
              Tornar-me Apoiador
            </TextbtnConceder>
          </BtnConceder>
        </LinearGradient>

        <BtnNaopermitir onPress={() => navigation.goBack()}>
          <Textbtn2>
            Não, obrigado
          </Textbtn2>
        </BtnNaopermitir>

      </DivButtons>
    </Container>
  );
};
