import React from 'react';

import { SafeAreaView } from '@shared/components/SafeView/index';

import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

import userPhoto from '@shared/assets/userPhoto.jpg';

import {
  BarUp,
  ButtonChat,
  Header,
  ImageHeader,
  ImagePerfil,
  ScrollView,
  TextDescAzul,
  TextDescBlack,
  TextImagem,
  TextImagemMenor,
  TextResponsavelBlack,
  ViewButton,
  ViewDadosImagem,
  ViewDescBlack,
  ViewDescBlackMaior,
  ViewDescMaior,
  ViewDescMaior2,
  ViewDescMenor,
  ViewImage,
  ViewInformações,
  ViewRow,
  ViewRow2,
  ViewRowBlack,
  ViewTextButton,
} from './styles';

export const CaseInformation: React.FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <BarUp>
          <LinearGradient
            colors={[
              'transparent', '#0288D1']}
            locations={[0.5, 0.7]}
          >
            <ImageHeader source={userPhoto} />
          </LinearGradient>
          <ViewDadosImagem>
            <TextImagem>Jhonny Lima Santos</TextImagem>
            <TextImagemMenor> Desaparecido • 25 Anos • Homem </TextImagemMenor>
          </ViewDadosImagem>
          <Header>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                name="arrow-left"
                color="#FFF"
                type="octicon"
                size={55}
                tvParallaxProperties={undefined}
              />
            </TouchableOpacity>
          </Header>
        </BarUp>

        <ViewInformações>
          <ViewRow>
            <ViewDescMenor>
              <TextDescAzul>Olho</TextDescAzul>
            </ViewDescMenor>

            <ViewDescMenor>
              <TextDescAzul>Cor do cabelo</TextDescAzul>
            </ViewDescMenor>
          </ViewRow>

          <ViewRowBlack>
            <ViewDescBlack>
              <TextDescBlack>Castanho</TextDescBlack>
            </ViewDescBlack>
            <ViewDescBlack>
              <TextDescBlack>Marrom</TextDescBlack>
            </ViewDescBlack>
          </ViewRowBlack>

          <ViewRow2>
            <ViewDescMenor>
              <TextDescAzul>Cabelo</TextDescAzul>
            </ViewDescMenor>
            <ViewDescMenor>
              <TextDescAzul>Cor da pele</TextDescAzul>
            </ViewDescMenor>
          </ViewRow2>

          <ViewRowBlack>
            <ViewDescBlack>
              <TextDescBlack>Ondulado</TextDescBlack>
            </ViewDescBlack>
            <ViewDescBlack>
              <TextDescBlack>Branco</TextDescBlack>
            </ViewDescBlack>
          </ViewRowBlack>

          <ViewDescMaior>
            <TextDescAzul>Descrição</TextDescAzul>
          </ViewDescMaior>
          <ViewDescBlackMaior>
            <TextDescBlack>
              Tatuagem de patinhas de cachorro na mão direita.
            </TextDescBlack>
          </ViewDescBlackMaior>

          <ViewDescMaior2>
            <TextDescAzul>Ultimo local visto</TextDescAzul>
          </ViewDescMaior2>
          <ViewDescBlackMaior>
            <TextDescBlack>Rua Adamantina, 03209-074</TextDescBlack>
            <TextDescBlack>Osasco, SP</TextDescBlack>
          </ViewDescBlackMaior>

          <ViewButton>
            <ViewImage>
              <ImagePerfil source={userPhoto} />
            </ViewImage>
            <ViewTextButton>
              <TextDescAzul>Responsável</TextDescAzul>
              <TextResponsavelBlack>Cláudia Aparecida</TextResponsavelBlack>
            </ViewTextButton>
            <ButtonChat>
              <Icon
                name="md-chatbox-ellipses-outline"
                color="#FFF"
                type="ionicon"
                size={40}
                tvParallaxProperties={undefined}
              />
            </ButtonChat>
          </ViewButton>
        </ViewInformações>

      </ScrollView>
    </SafeAreaView>
  );
};
