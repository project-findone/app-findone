import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import {
  ButtonBlue, Text, TextMenor, Container,
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
];

const Item = ({ data }: { data: IUser }) => (
  <ButtonBlue>
    <Text>{data.name}</Text>
    <TextMenor>
      Vista em
      {' '}
      {data.city}
    </TextMenor>
    <TextMenor>
      {data.age}
      {' '}
      anos
    </TextMenor>
  </ButtonBlue>
);

export const ListCase: React.FC = () => {
  const renderItem: ListRenderItem<IUser> = ({ item }) => <Item data={item} />;

  return (
    <Container>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item: IUser) => item.id}
      />
    </Container>
  );
};
