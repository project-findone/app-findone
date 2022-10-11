import { SafeAreaView } from '@shared/components/SafeView';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Icon } from 'react-native-elements';
import CustomSwitch from '@shared/components/Switch';
import {
  FlatList,
  ListRenderItem,
} from 'react-native';

import UnknownImage from '@shared/assets/unknown.png';

import { DATA } from './Data';
import { ModalInit } from './Modal';

import {
  ViewMapa, BarUp, Text2, Button1,
  ButtonsArea,
  ButtonBlue,
  ImagePerfil,
  TextMenor,
  TextName,
  ViewImage,
  ViewText,
  ViewLista,
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
          <ModalInit />
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
