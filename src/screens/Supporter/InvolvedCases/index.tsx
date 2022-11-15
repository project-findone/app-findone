import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity, View, FlatList, ListRenderItem,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { Theme } from '@shared/theme';

import SafeView from '@shared/components/SafeView';
import SupportMsg from '@shared/components/SupportMsg';
import UnknownImage from '@shared/assets/unknown.png';
import { ICaseInvolvedData, useUser } from '@shared/hooks/contexts/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Header,
  Content,
  Title,
  PersonCardContainer,
  ImagePerfil,
  Text,
  NotFoundContainer,
  NotFoundText,
  ButtonInformation,
  ButtonChat,
  Buttons,
  TextInformation,
  TextChat,
} from './styles';

export const InvolvedCases: React.FC = () => {
  const [user, setUser] = useState(false);
  const navigation = useNavigation();

  const {
    casesInvolved, services: { listInvolvedCases },
  } = useUser();

  useEffect(() => {
    (async () => {
      const userToken = await AsyncStorage.getItem('Person:token');
      if (userToken) {
        setUser(true);
        await listInvolvedCases();
      }
    })();
  }, [listInvolvedCases]);

  const Item: React.FC<{ data: ICaseInvolvedData }> = ({ data }) => (
    <PersonCardContainer onPress={() => navigation.navigate('InfoCase', data)} type={data.disappeared.personTypeID}>
      <ImagePerfil source={UnknownImage} />
      <Text>{data.disappeared.name}</Text>
      <Buttons>
        <ButtonInformation onPress={() => navigation.navigate('InfoCase', data)} type={data.disappeared.personTypeID}>
          <Icon
            name="information"
            color="#A8A8A8"
            type="ionicon"
            size={35}
            tvParallaxProperties={undefined}
          />
          <TextInformation>Info</TextInformation>
        </ButtonInformation>

        <ButtonChat onPress={() => navigation.navigate('Chat', data)} type={data.disappeared.personTypeID}>
          <Icon
            name="md-chatbox-ellipses-outline"
            color={data.disappeared.personTypeID === 2
              ? Theme.COLORS.SECONDARY : Theme.COLORS.TERCIARY}
            type="ionicon"
            size={35}
            tvParallaxProperties={undefined}
          />
          <TextChat type={data.disappeared.personTypeID}>Chat</TextChat>

        </ButtonChat>
      </Buttons>
    </PersonCardContainer>

  );

  const renderItem: ListRenderItem<ICaseInvolvedData> = ({ item }) => <Item data={item} />;

  return (
    <SafeView>
      {!user && <SupportMsg />}
      <>
        <Header>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-left"
              color="#000"
              type="octicon"
              size={60}
              tvParallaxProperties={undefined}
            />
          </TouchableOpacity>

          <Title>Casos Envolvidos</Title>
        </Header>

        <Content>
          <View style={{ flex: 1 }}>
            { casesInvolved
              ? (
                <FlatList
                  data={casesInvolved}
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
        </Content>

      </>
    </SafeView>
  );
};
