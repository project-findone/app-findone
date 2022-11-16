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
            Seja bem vindo ao nosso aplicativo. Leia com atenção os termos abaixo.
            {'\n'}
            {'\n'}

            {'\n'}
            {'\n'}
            Morbi in bibendum magna, a tristique massa. Proin at luctus augue. Phasellus suscipit
            nisl sit amet sapien consectetur, eu varius arcu gravida. Sed vehicula viverra leo at
            pellentesque. Donec egestas nunc at molestie scelerisque. Suspendisse viverra erat in
            eros commodo, vel porttitor nibh iaculis. Quisque volutpat urna non purus scelerisque
            ullamcorper. Sed dignissim a tellus sed tincidunt. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Cras tincidunt aliquet sem,
            vitae varius dolor luctus ac. Morbi euismod aliquam sapien et posuere.
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
