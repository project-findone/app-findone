import React, { useEffect, useState } from 'react';
import {
  Alert, Linking,
} from 'react-native';
import MapView, {
  Callout,
  Marker,
  PROVIDER_GOOGLE,
  Region,
} from 'react-native-maps';
import { FontAwesome } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { Button } from '@shared/components/button';

import { fetchUserGithub, fetchLocalMapBox } from './api';

import {
  Container,
  CalloutContainer,
  map,
  CalloutSmallText,
  CalloutText,
  Footer,
  FooterText,
} from './styles';

interface Dev {
  id: number;
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  location: string;
  latitude?: number;
  longitude?: number;
  html_url: string;
}

const initialRegion = {
  latitude: 49.2576508,
  longitude: -123.2639868,
  latitudeDelta: 100,
  longitudeDelta: 100,
};

export const Map: React.FC<{ name: string }> = ({ name }) => {
  const [devs, setDevs] = useState<Dev[]>([]);
  const [username, setUsername] = useState('');
  const [region, setRegion] = useState<Region>();

  const getCurrentPosition = async () => {
    const { status } = await Location.requestPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Ops!', 'Permissão de acesso a localização negada.');
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync();

    setRegion({
      latitude, longitude, latitudeDelta: 100, longitudeDelta: 100,
    });
  };

  useEffect(() => {
    getCurrentPosition();
  }, []);

  function handleOpenGithub(url: string) {
    Linking.openURL(url);
  }

  async function handleSearchUser() {
    let dev: Dev;

    if (!username) return;

    const githubUser = await fetchUserGithub(username);

    if (!githubUser || !githubUser.location) {
      Alert.alert('Ops!', 'Usuário não encontrado ou não tem a localização definida no Github');
      return;
    }

    const localMapBox = await fetchLocalMapBox(githubUser.location);

    if (!localMapBox || !localMapBox.features[0].center) {
      Alert.alert('Ops!', 'Erro ao converter a localidade do usuário em coordenadas geográficas!');
      return;
    }

    const [longitude, latitude] = localMapBox.features[0].center;

    dev = {
      ...githubUser,
      latitude,
      longitude,
    };

    setRegion({
      latitude,
      longitude,
      latitudeDelta: 3,
      longitudeDelta: 3,
    });

    const devAlreadyExists = dev && devs.find((user) => user.id === dev.id);

    if (devAlreadyExists) return;

    setDevs([...devs, dev]);
    setUsername('');
  }

  return (
    <Container>
      <MapView
        provider={PROVIDER_GOOGLE}
        region={region}
        style={styles.map}
        initialRegion={initialRegion}
      >
        {devs.map((dev) => (
          <Marker
            key={dev.id}
            image={{ uri: `${dev.avatar_url}&s=120` }}
            calloutAnchor={{
              x: 2.9,
              y: 0.8,
            }}
            coordinate={{
              latitude: Number(dev.latitude),
              longitude: Number(dev.longitude),
            }}
          >
            <Callout tooltip onPress={() => handleOpenGithub(dev.html_url)}>
              <CalloutContainer>
                <CalloutText>{dev.name}</CalloutText>
                <CalloutSmallText>{dev.bio}</CalloutSmallText>
              </CalloutContainer>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <Footer>
        <TextInput
          placeholder={`${devs.length} Dev´s encontrados`}
          style={styles.FooterText}
          onChangeText={setUsername}
          value={username}
        />

        <Button onPress={handleSearchUser}>
          <FontAwesome name="github" size={24} color="#fff" />
        </Button>
      </Footer>
    </Container>

  );
};
