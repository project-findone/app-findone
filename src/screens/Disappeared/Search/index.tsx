import { SafeAreaView } from '@shared/components/SafeView';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Icon } from 'react-native-elements';
import CustomSwitch from '@shared/components/Switch';
import {
  FlatList,
  ListRenderItem,
  Alert,
  Modal,
} from 'react-native';

import UnknownImage from '@shared/assets/unknown.png';

import { DATA } from './Data';

import {
  Text, ViewMapa, BarUp, Text2, Button1,
  ButtonsArea,
  ButtonBlue,
  ImagePerfil,
  TextMenor,
  TextName,
  ViewImage,
  ViewText,
  ViewLista,
  ButtonModel,
  CenteredViewModel,
  ViewModel,
  ButtonBlueModal,
  ButtonGreenModal,
  ViewImageModal,
  ViewRow,
  ViewTextModal,
  TextCaso,
  TextCorCaso,
  ViewTextExplicacao,
  TextExplicacao,
  ButtonYellowModal,
  UserImage,
  TextButtonModel,
  ModelTransparent,
} from './styles';

interface IUser {
  id: string;
  name: string;
  city: string;
  age: string;
}

const Item = ({ data }: { data: IUser }) => (
  <ButtonBlue>
    <ViewImage>
      <ImagePerfil source={UnknownImage} />
    </ViewImage>
    <ViewText>
      <TextName>{data.name}</TextName>
      <TextMenor>
        Visto em
        {' '}
        {data.city}
      </TextMenor>
      <TextMenor>
        {data.age}
        {' '}
        anos
      </TextMenor>
    </ViewText>
  </ButtonBlue>
);

export const SearchIndex = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [optionSelected, setOptionSelected] = useState(1);

  const onSelectSwitch = (index: any) => {
    setOptionSelected(index);
  };

  const renderItem: ListRenderItem<IUser> = ({ item }) => <Item data={item} />;

  return (
    <SafeAreaView>
      <BarUp>
        <ButtonsArea>
          <CustomSwitch
            selectionMode={1}
            option1="Mapa"
            option2="Lista"
            onSelectSwitch={onSelectSwitch}
          />

          <Button1 onPress={() => navigation.navigate('Filter')}>
            <Icon
              style={{ marginRight: 10 }}
              name="search"
              color="#FFF"
              type="ionicon"
              size={23}
              tvParallaxProperties={undefined}
            />
            <Text2>Buscar</Text2>
          </Button1>
        </ButtonsArea>
      </BarUp>

      { optionSelected === 1 ? (
        <ViewMapa>
          <CenteredViewModel>
            <Modal
              animationType="slide"
              transparent
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}
            >

              <ModelTransparent>
                <ViewModel>
                  <ButtonBlueModal>
                    <ViewRow>
                      <ViewImageModal>
                        <Icon
                          name="map-pin"
                          color="#1691D4"
                          type="feather"
                          size={50}
                          tvParallaxProperties={undefined}
                        />
                      </ViewImageModal>
                      <ViewTextModal>
                        <TextCaso>Desaparecidos</TextCaso>
                        <TextCorCaso>Casos Azuis</TextCorCaso>
                      </ViewTextModal>
                    </ViewRow>
                    <ViewTextExplicacao>
                      <TextExplicacao>
                        Pessoa está sendo procurada.
                      </TextExplicacao>
                      <TextExplicacao>
                        (Alguém quer encontrá-la)
                      </TextExplicacao>
                    </ViewTextExplicacao>
                  </ButtonBlueModal>

                  <ButtonGreenModal>
                    <ViewRow>
                      <ViewImageModal>
                        <Icon
                          name="map-pin"
                          color="#0F9D58"
                          type="feather"
                          size={50}
                          tvParallaxProperties={undefined}
                        />
                      </ViewImageModal>
                      <ViewTextModal>
                        <TextCaso>Desaparecidos</TextCaso>
                        <TextCorCaso>Casos Verdes</TextCorCaso>
                      </ViewTextModal>
                    </ViewRow>
                    <ViewTextExplicacao>
                      <TextExplicacao>
                        Pessoa que deseja se reencontrar com familiares ou amigos,
                        mas não sabe onde estão.
                      </TextExplicacao>
                    </ViewTextExplicacao>
                  </ButtonGreenModal>

                  <ButtonYellowModal>
                    <ViewRow>
                      <ViewImageModal>
                        <UserImage source={UnknownImage} />
                      </ViewImageModal>
                      <ViewTextModal>
                        <TextCaso>Apoiadores</TextCaso>
                        <TextCorCaso>Perfis Dourados</TextCorCaso>
                      </ViewTextModal>
                    </ViewRow>
                    <ViewTextExplicacao>
                      <TextExplicacao>
                        Pessoas que ajudam os casos a serem solucionados.
                      </TextExplicacao>
                    </ViewTextExplicacao>
                  </ButtonYellowModal>

                  <ButtonModel
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <TextButtonModel> Entendi</TextButtonModel>
                  </ButtonModel>
                </ViewModel>

              </ModelTransparent>
            </Modal>
            <ButtonModel onPress={() => setModalVisible(true)}>
              <Text> Show Modal </Text>
            </ButtonModel>
          </CenteredViewModel>
        </ViewMapa>
      ) : (
        <ViewLista>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item: IUser) => item.id}
          />
        </ViewLista>
      )}

    </SafeAreaView>
  );
};
