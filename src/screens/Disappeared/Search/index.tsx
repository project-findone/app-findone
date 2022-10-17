/* eslint-disable no-console */
import { SafeAreaView } from '@shared/components/SafeView';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Icon } from 'react-native-elements';
import CustomSwitch from '@shared/components/Switch';
import * as Location from 'expo-location';
import {
  FlatList,
  ListRenderItem,
} from 'react-native';

import UnknownImage from '@shared/assets/unknown.png';

import MapView from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

type Props = { route: any };

export const SearchIndex: React.FC<Props> = ({ route }) => {
  const [optionSelected, setOptionSelected] = useState(1);
  const [origin, setOrigin] = useState({
    latitude: -23.5559942160993,
    longitude: -46.63910562391042,
    latitudeDelta: 0.000922,
    longitudeDelta: 0.010021,
  });
  const [firstTime, setFirstTime] = useState('');

  const navigation = useNavigation();

  const onSelectSwitch = (index: any) => {
    setOptionSelected(index);
  };

  const renderItem: ListRenderItem<IUser> = ({ item }) => <Item data={item} />;

  const readData = async () => {
    let value = await AsyncStorage.getItem('firstTime');
    if (value === null || '') {
      value = 'true';
    }setFirstTime(value);
  };

  const getUserLocation = async () => {
    const servicesEnabled = await Location.hasServicesEnabledAsync();
    console.log(servicesEnabled);
    if (servicesEnabled) {
      const coordsPosition = await Location.getCurrentPositionAsync();
      const geocodePosition = await Location.reverseGeocodeAsync({
        latitude: coordsPosition.coords.latitude,
        longitude: coordsPosition.coords.longitude,
      });
      return { coordsPosition, geocodePosition };
    }
    await Location.getForegroundPermissionsAsync();

    return { coordsPosition: null, geocodePosition: null };
  };

  readData();

  useEffect(() => {
    if (route?.params?.origin !== undefined) {
      setOrigin(({ latitude, longitude, ...rest }) => ({
        latitude: route.params.latitude,
        longitude: route.params.longitude,
        ...rest,
      }));
    }

    getUserLocation().then((result) => { console.log(result); });
  }, [route]);

  return (
    <SafeAreaView>
      {firstTime === 'true' && <ModalInit />}

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
          <MapView
            style={{ width: '100%', height: '100%' }}
            initialRegion={origin}
            showsUserLocation
            loadingEnabled
          />
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
