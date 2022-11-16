import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { data } from './data';
import {
  Title, ViewTop, ViewPodium, ViewList, ViewTitle, Filters, State, City, Label,
  First, Second, Third, ImageName, Position, ImagePerson, TitleWhite, Item,
  NumberItem, DivTitles, Name, Local, Points, NumberPosition,
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
          <ImageName>
            <ImagePerson source={{ uri: data[1].image }} />
            <TitleWhite>
              {data[1].name}
              {'\n'}
              {data[1].city}
              {' - '}
              {data[1].state}
              {'\n'}
              {data[1].points}
              {' Pontos'}
            </TitleWhite>
          </ImageName>
          <Position>
            <NumberPosition color="#929292">2</NumberPosition>
          </Position>
        </Second>
        <First>
          <ImageName>
            <ImagePerson source={{ uri: data[0].image }} />
            <TitleWhite>
              {data[0].name}
              {'\n'}
              {data[0].city}
              {' - '}
              {data[0].state}
              {'\n'}
              {data[0].points}
              {' Pontos'}
            </TitleWhite>
          </ImageName>
          <Position>
            <NumberPosition color="#D3C229">1</NumberPosition>
          </Position>
        </First>
        <Third>
          <ImageName>
            <ImagePerson source={{ uri: data[2].image }} />
            <TitleWhite>
              {data[2].name}
              {'\n'}
              {data[2].city}
              {' - '}
              {data[2].state}
              {'\n'}
              {data[2].points}
              {' Pontos'}
            </TitleWhite>
          </ImageName>
          <Position>
            <NumberPosition color="#9E7762">3</NumberPosition>
          </Position>
        </Third>
      </ViewPodium>

      <ViewList>
        <FlatList
          style={{ paddingTop: 5, marginBottom: 15 }}
          data={data.slice(3)}
          renderItem={(item) => (
            <Item>
              <NumberItem>
                {item.item.order}
                °
              </NumberItem>
              <ImagePerson source={{ uri: item.item.image }} />
              <DivTitles>
                <Name>{item.item.name}</Name>
                <Local>
                  {item.item.city}
                  {' - '}
                  {item.item.state}
                </Local>
                <Points>
                  {item.item.points}
                  {' Pontos'}
                </Points>
              </DivTitles>
            </Item>
          )}
        />
      </ViewList>

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
