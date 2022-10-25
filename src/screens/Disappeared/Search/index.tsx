/* eslint-disable no-console */
import { SafeAreaView } from '@shared/components/SafeView';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from 'react';
import * as Location from 'expo-location';
import { Icon } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CustomSwitch from '@shared/components/Switch';
import {
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';

import UnknownImage from '@shared/assets/unknown.png';

import MapView from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Theme } from '@shared/theme';
import { DATA } from './Data';

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
  ButtonLocationContainer,
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

export const SearchIndex: React.FC<Props> = () => {
  const [optionSelected, setOptionSelected] = useState(1);
  const [origin, setOrigin] = useState({
    latitude: -23.5559942160993,
    longitude: -46.63910562391042,
    latitudeDelta: 0.000922,
    longitudeDelta: 0.010021,
  });
  const navigation = useNavigation();
  const mapRef = useRef<MapView>(null);

  const onSelectSwitch = (index: any) => {
    setOptionSelected(index);
  };

  const renderItem: ListRenderItem<IUser> = ({ item }) => <Item data={item} />;

  const readData = async () => {
    const value = await AsyncStorage.getItem('firstTime');
    if (value === null || '') {
      await AsyncStorage.setItem('firstTime', 'false');
    }
  };

  const getUserLocation = async () => {
    const { status } = await Location.getForegroundPermissionsAsync();
    if (status === 'granted') {
      const coordsPosition = await Location.getCurrentPositionAsync();
      console.log(coordsPosition.coords);
      const geocodePosition = await Location.reverseGeocodeAsync({
        latitude: coordsPosition.coords.latitude,
        longitude: coordsPosition.coords.longitude,
      });
      return { coordsPosition, geocodePosition };
    }
    await Location.requestForegroundPermissionsAsync();

    return { coordsPosition: null, geocodePosition: null };
  };

  useEffect(() => {
    (async () => {
      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
      });

      const { coordsPosition } = await getUserLocation();
      if (coordsPosition) {
        const { coords } = coordsPosition;
        setOrigin(({ latitude, longitude, ...rest }) => ({
          latitude: coords.latitude,
          longitude: coords.longitude,
          ...rest,
        }));
      }
      await readData();
    })();
  }, []);

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
          <MapView
            ref={mapRef}
            style={{ width: '100%', height: '100%' }}
            initialRegion={origin}
            region={origin}
            showsUserLocation
            loadingEnabled
            showsMyLocationButton={false}
          />
          <TouchableOpacity
            style={ButtonLocationContainer}
            onPress={() => { mapRef.current?.animateToRegion(origin); }}
          >
            <MaterialCommunityIcons name="crosshairs-gps" color={Theme.COLORS.CAPTION_500} size={24} />
          </TouchableOpacity>
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
