/* eslint-disable no-console */
import React from 'react';

import { SafeAreaView } from '@shared/components/SafeView/index';
import { FlatList, ListRenderItem } from 'react-native';
import UnknownImage from '@shared/assets/unknown.png';
import {
  Title, ButtonBlue, Container, Header,
  Text, TextMenor, ViewText, ViewImage, ImagePerfil,
} from './styles';

interface IUser {
  id: string;
  name: string;
  city: string;
  age: string;

}

const DATA = [
  {
    id: '1',
    name: 'Maria Carolina Silva',
    city: 'Santana de Parnaíba',
    age: '20',
  },
  {
    id: '2',
    name: 'Carlos Alberto',
    city: 'São Paulo',
    age: '35',
  },
  {
    id: '3',
    name: 'Paula Oliveira',
    city: 'Barueri',
    age: '10',
  },
  {
    id: '4',
    name: 'João Oliveira',
    city: 'Barueri',
    age: '10',
  },
  {
    id: '5',
    name: 'Paula Oliveira',
    city: 'Barueri',
    age: '10',
  },
  {
    id: '6',
    name: 'Paula Oliveira',
    city: 'Barueri',
    age: '10',
  },
  {
    id: '7',
    name: 'Paula Oliveira',
    city: 'Barueri',
    age: '10',
  },
  {
    id: '8',
    name: 'Paula Oliveira',
    city: 'Barueri',
    age: '10',
  },
  {
    id: '9',
    name: 'Paula Oliveira',
    city: 'Barueri',
    age: '10',
  },
];

const Item = ({ data }: { data: IUser }) => (
  <ButtonBlue>
    <ViewImage>
      <ImagePerfil source={UnknownImage} />
    </ViewImage>
    <ViewText>
      <Text>{data.name}</Text>
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

export const List: React.FC = () => {
  const renderItem: ListRenderItem<IUser> = ({ item }) => <Item data={item} />;

  return (
    <SafeAreaView>
      <Container>

        <Header>

          <Title>Meus casos</Title>

        </Header>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item: IUser) => item.id}
        />

      </Container>
    </SafeAreaView>
  );
};
