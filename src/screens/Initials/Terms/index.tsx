import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from '@shared/components/SafeView';

import { LinearGradient } from 'expo-linear-gradient';
import {
  Title, Text, BottomArea, InfoArea, Container,
  TopGroup, BottomText, ButtonRight, TextButtonRight, ScrollView,
} from './styles';

type Props = { route: any };

export const Terms: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation();
  const typePage = route.params.initial;

  return (
    <SafeAreaView>
      <Container>
        <TopGroup>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {typePage === 'false'
              ? (
                <Icon
                  name="arrow-left"
                  color="#000"
                  type="octicon"
                  size={60}
                  tvParallaxProperties={undefined}
                />
              )
              : (
                <Icon
                  name="file-multiple"
                  color="#00B8D8"
                  type="material-community"
                  size={52}
                  tvParallaxProperties={undefined}
                />
              )}
          </TouchableOpacity>

          <Title>Termos de Uso</Title>
        </TopGroup>

        <ScrollView>
          <Text>
            Ao acessar essa plataforma, o indivíduo passa a ser completamente responsável
            por suas ações. Por isso certifique - se
            de que a sua idade é maior ou igual a 18 anos.
            {'\n'}
            {'\n'}
            Ao registrar algum caso
            de desaparecimento no sistema atente-se para a
            veracidade das informações, pois a declaração de falsos dados é crime
            segundo o Artigo 313 da Constituição.
            {'\n'}
            {'\n'}
            Ao cadastrar
            dados no sistema, saiba que serão compartilhados para executar
            possíveis ações do sistema.
            Além disso, esteja ciente que as imagens inseridas irão circular por todo o sistema.
            {'\n'}
          </Text>
          {typePage === 'true'
            ? (
              <ButtonRight onPress={() => navigation.navigate('Local')}>
                <TextButtonRight> LI E CONCORDO </TextButtonRight>
              </ButtonRight>
            ) : ('')}
        </ScrollView>

        <BottomArea>
          <LinearGradient
            colors={['transparent', '#fff']}
            style={{ width: '100%', height: '22%' }}
            locations={[0, 0.25]}
          >
            <InfoArea>
              <Icon
                name="angle-double-up"
                color="rgba(0, 0, 0, 0.25)"
                type="font-awesome"
                size={50}
                tvParallaxProperties={undefined}
              />
              <BottomText>
                Deslize
              </BottomText>
            </InfoArea>
          </LinearGradient>
        </BottomArea>
      </Container>
    </SafeAreaView>
  );
};
