/* eslint-disable no-console */
import React from 'react';

import { SafeAreaView } from '@shared/components/SafeView/index';
import { FlatList, ListRenderItem } from 'react-native';
import UnknownImage from '@shared/assets/unknown.png';
import {
  Title, PersonCardContainer, Header,
  Text, TextMenor, ViewText, ViewImage, ImagePerfil,
} from './styles';

interface IUser {
  id: number;
  personTypeID: number;
  name: string;
  city: string;
  age: string;

}

const DATA = [
  {
    id: 1,
    personTypeID: 3,
    name: 'Maria Carolina Silva',
    city: 'Santana de Parnaíba',
    age: '20',
  },
  {
    id: 2,
    personTypeID: 2,
    name: 'Carlos Alberto',
    city: 'São Paulo',
    age: '35',
  },
  {
    id: 3,
    personTypeID: 3,
    name: 'Paula Oliveira',
    city: 'Barueri',
    age: '10',
  },
  {
    id: 4,
    personTypeID: 2,
    name: 'João Oliveira',
    city: 'Barueri',
    age: '10',
  },
  {
    id: 5,
    personTypeID: 3,
    name: 'Paula Oliveira',
    city: 'Barueri',
    age: '10',
  },
  {
    id: 6,
    personTypeID: 2,
    name: 'Paula Oliveira',
    city: 'Barueri',
    age: '10',
  },
  {
    id: 7,
    personTypeID: 3,
    name: 'Paula Oliveira',
    city: 'Barueri',
    age: '10',
  },
  {
    id: 8,
    personTypeID: 2,
    name: 'Paula Oliveira',
    city: 'Barueri',
    age: '10',
  },
  {
    id: 9,
    personTypeID: 3,
    name: 'Paula Oliveira',
    city: 'Barueri',
    age: '10',
  },
];

const Item: React.FC<{ data: IUser }> = ({ data }) => (
  <PersonCardContainer type={data.personTypeID}>
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
  </PersonCardContainer>
);

export const List: React.FC = () => {
  const renderItem: ListRenderItem<IUser> = ({ item }) => <Item data={item} />;

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={(
          <Header>
            <Title>Meus casos</Title>
          </Header>
)}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 30, paddingBottom: 30 }}
      />
    </SafeAreaView>
  );
};
