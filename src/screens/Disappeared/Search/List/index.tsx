/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';

import UnknownImage from '@shared/assets/unknown.png';
import { ICaseData, useUser } from '@shared/hooks/contexts/UserContext';
import { useNavigation } from '@react-navigation/native';
import {
  Title, PersonCardContainer, Header,
  Text, TextMenor, ViewText, ViewImage, ImagePerfil, NotFoundContainer, NotFoundText,
} from './styles';

export const List: React.FC = () => {
  const {
    casesOfDisappeareds, casesOfDisappearedsF, setCasesOfDisappearedsF, services: { listCases },
  } = useUser();
  const navigation = useNavigation();

  const Item: React.FC<{ data: ICaseData }> = ({ data }) => (
    <PersonCardContainer onPress={() => navigation.navigate('InfoCase', data)} type={data.disappeared.personTypeID}>
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

  const renderItem: ListRenderItem<ICaseData> = ({ item }) => <Item data={item} />;

  useEffect(() => {
    (async () => {
      await listCases();
    })();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {casesOfDisappeareds || casesOfDisappearedsF
        ? (
          <FlatList
            ListHeaderComponent={(
              <Header>
                <Title>Meus casos</Title>
              </Header>
)}
            data={casesOfDisappearedsF || casesOfDisappeareds}
            renderItem={renderItem}
            keyExtractor={(item) => String(item.disappeared.personID)}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 30, paddingBottom: 30 }}
          />
        )
        : (
          <NotFoundContainer>
            <NotFoundText>Nenhum caso foi encontrado.</NotFoundText>
          </NotFoundContainer>
        )}
    </View>
  );
};
