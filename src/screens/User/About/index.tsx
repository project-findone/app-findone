import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';

import LogoFindone from '@shared/assets/findoneLogoComplete.png';
import {
  ImagePerfil, Title, Text,
  ScrollView, TopGroup,
} from './styles';

export const About: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <TopGroup>

          <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute' }}>
            <Icon
              name="arrow-left"
              color="#000"
              type="octicon"
              size={60}
              tvParallaxProperties={undefined}
            />
          </TouchableOpacity>

          <ImagePerfil source={LogoFindone} />
        </TopGroup>

        <Title>Sobre Nós</Title>

        <Text>
          Nós somos a FindOne, uma empresa pública que possui como principal
          intuito ajudar a sociedade a encontrar algum ente que esteja em estado de desaparecimento.
          {'\n'}
          {'\n'}
          Entretanto, a fim de conseguirmos um diferencial para a nossa
          empresa, disponibilizamos a opção para que qualquer pessoa se auto
          cadastre no sistema como alguém que queira ser encontrado, visando
          conseguir contato com alguma outra pessoa.
          {'\n'}
          {'\n'}
          Além disso, fornecemos certificados de trabalho voluntário para pessoas
          que se interessam em contribuir no solucionamento de algum determinado caso.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
