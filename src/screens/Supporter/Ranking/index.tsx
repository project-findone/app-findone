import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

import { LinearGradient } from 'expo-linear-gradient';
import {
  Title, ViewTop, ViewPodium, ViewList, ViewTitle, Filters, State, City, Label,
  First, Second, Third, ImageName, Position,
} from './styles';

export const Ranking: React.FC = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#007592', '#00C7AC']}
      style={{
        flex: 1,
        paddingHorizontal: '6%',
        paddingTop: 60,
      }}
      locations={[0.2, 1]}
    >
      <ViewTop>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: 'absolute', left: 15 }}
        >
          <Icon
            name="arrow-left"
            color="#FFF"
            type="octicon"
            size={60}
            tvParallaxProperties={undefined}
          />
        </TouchableOpacity>

        <ViewTitle><Title>Ranking</Title></ViewTitle>
      </ViewTop>

      <ViewPodium>
        <Second>
          <ImageName />
          <Position />
        </Second>
        <First>
          <ImageName />
          <Position />
        </First>
        <Third>
          <ImageName />
          <Position />
        </Third>
      </ViewPodium>

      <ViewList />

      <Filters>
        <State>
          <Label>Estado</Label>
          <Icon
            name="chevron-down"
            color="#1ABFCA"
            type="entypo"
            size={35}
            tvParallaxProperties={undefined}
          />
        </State>
        <City>
          <Label>Cidade</Label>
          <Icon
            name="chevron-down"
            color="#1ABFCA"
            type="entypo"
            size={35}
            tvParallaxProperties={undefined}
          />
        </City>
      </Filters>
    </LinearGradient>
  );
};
