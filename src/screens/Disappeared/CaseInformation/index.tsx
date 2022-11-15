import React, { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

import { SafeAreaView } from '@shared/components/SafeView/index';

import { Modal, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

import userPhoto from '@shared/assets/unknown_profile.png';

import { ICaseData } from '@shared/hooks/contexts/UserContext';
import {
  Container,
  BarUp,
  ButtonChat,
  Header,
  ImageHeader,
  ImagePerfil,
  ScrollView,
  TextImagem,
  TextImagemMenor,
  ViewButton,
  ViewDadosImagem,
  ViewDescBlackMaior,
  ViewDescMaior2,
  ViewImage,
  ViewInformações,
  ViewTextButton,
  CharacGroup,
  InfoText,
  CharacContainer,
  CenteredViewModel,
  ModelTransparent,
  ViewModel,
  TextCaso,
  ViewRow,
  ButtonModelYes,
  TextButtonModelYes,
  ButtonModelNo,
  TextButtonModelNo,
} from './styles';

type IDisappearedData = ICaseData & {
  disappeared: {
    gender: string
    owner: {
      name: string
      lastname: string
    }
    disCharacteristic: {
      characteristicID: number
      characteristic: {
        characteristicName: string
        characteristicTypeName: string
      }
    }[]
  }
  case: {
    street: string
    state: string
    description: string
  }
};

export const CaseInformation: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { params } = useRoute();
  const [disData] = useState<IDisappearedData | null>(params as IDisappearedData);
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      {disData ? (
        <ScrollView>

          <CenteredViewModel>
            <Modal
              animationType="fade"
              transparent
              visible={modalVisible}
              onRequestClose={() => {
                navigation.goBack();
              }}
            >

              <ModelTransparent>
                <ViewModel>
                  <TextCaso>Deseja ingressar nesse caso e ajudar em sua solução?</TextCaso>
                  <ViewRow>
                    <ButtonModelYes>
                      <TextButtonModelYes>Sim</TextButtonModelYes>
                    </ButtonModelYes>

                    <ButtonModelNo
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <TextButtonModelNo>Não</TextButtonModelNo>
                    </ButtonModelNo>
                  </ViewRow>
                </ViewModel>

              </ModelTransparent>
            </Modal>
          </CenteredViewModel>
          <Container>
            <BarUp>
              <ImageHeader source={userPhoto} />
              <LinearGradient
                colors={['transparent', '#0288D1']}
                style={{ width: '100%', height: '100%', position: 'absolute' }}
                locations={[0.2, 0.7]}
              />
              <ViewDadosImagem>
                <TextImagem numberOfLines={1}>{`${disData?.disappeared.name} ${disData?.disappeared.lastname}`}</TextImagem>
                <TextImagemMenor>
                  {`${disData?.disappeared.personTypeID === 2 ? 'Desaparecido' : 'Perdido'} • ${disData?.disappeared.age} anos • ${disData?.disappeared.gender}`}
                </TextImagemMenor>
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
              <CharacContainer>
                {disData?.disappeared.disCharacteristic.forEach(({ characteristic: c }) => (
                  <CharacGroup initialGroup positionType="left">
                    <InfoText positionType="top">{c.characteristicTypeName}</InfoText>
                    <InfoText positionType="bottom">{c.characteristicName}</InfoText>
                  </CharacGroup>
                ))}
              </CharacContainer>
              <ViewDescMaior2>
                <InfoText positionType="top">Descrição</InfoText>
              </ViewDescMaior2>
              <ViewDescBlackMaior>
                <InfoText positionType="bottom">{disData?.case.description}</InfoText>
              </ViewDescBlackMaior>

              <ViewDescMaior2>
                <InfoText positionType="top">Ultimo local visto</InfoText>
              </ViewDescMaior2>
              <ViewDescBlackMaior>
                <InfoText positionType="bottom">{`${disData?.case.street}, 06528-105`}</InfoText>
                <InfoText positionType="bottom">{`${disData?.case.city}, ${disData?.case.state}`}</InfoText>
              </ViewDescBlackMaior>

              <ViewButton>
                <ViewImage>
                  <ImagePerfil source={userPhoto} />
                </ViewImage>
                <ViewTextButton>
                  <InfoText positionType="top">Responsável</InfoText>
                  <InfoText positionType="bottom" numberOfLines={1} owner>{`${disData?.disappeared.owner.name} ${disData?.disappeared.owner.lastname}`}</InfoText>
                </ViewTextButton>
                <ButtonChat onPress={() => setModalVisible(true)}>
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
          </Container>
        </ScrollView>
      ) : (
        <Container error>
          <InfoText positionType="bottom">Não foi possível consultar o caso.</InfoText>
          <InfoText positionType="bottom">Por favor, tente novamente mais tarde</InfoText>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-left"
              color="#000000"
              type="octicon"
              size={55}
              style={{ marginTop: 10 }}
              tvParallaxProperties={undefined}
            />
          </TouchableOpacity>
        </Container>
      )}
    </SafeAreaView>
  );
};
