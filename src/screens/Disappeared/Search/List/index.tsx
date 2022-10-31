/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';

import UnknownImage from '@shared/assets/unknown.png';
import { ICaseData, useUser } from '@shared/hooks/contexts/UserContext';
import {
  Title, PersonCardContainer, Header,
  Text, TextMenor, ViewText, ViewImage, ImagePerfil, NotFoundContainer, NotFoundText,
} from './styles';

const Item: React.FC<{ data: ICaseData }> = ({ data }) => (
  <PersonCardContainer type={data.disappeared.personTypeID}>
    <ViewImage>
      <ImagePerfil source={UnknownImage} />
    </ViewImage>
    <ViewText>
      <Text>{data.disappeared.name}</Text>
      <TextMenor>
        Visto em
        {' '}
        {data.case.city}
      </TextMenor>
      <TextMenor>
        {data.disappeared.age}
        {' '}
        anos
      </TextMenor>
    </ViewText>
  </PersonCardContainer>
);

export const List: React.FC = () => {
  const { casesOfDisappeareds, services: { listCases } } = useUser();

  const renderItem: ListRenderItem<ICaseData> = ({ item }) => <Item data={item} />;

  useEffect(() => {
    (async () => {
      await listCases();
    })();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {casesOfDisappeareds
        ? (
          <FlatList
            ListHeaderComponent={(
              <Header>
                <Title>Meus casos</Title>
              </Header>
)}
            data={casesOfDisappeareds}
            renderItem={renderItem}
            keyExtractor={(item) => String(item.disappeared.personID)}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 30, paddingBottom: 30 }}
          />
        )
        : (
          <NotFoundContainer>
            <NotFoundText>Não há casos cadastrados.</NotFoundText>
          </NotFoundContainer>
        )}
    </View>
  );
};
