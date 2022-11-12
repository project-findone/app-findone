import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from '@shared/components/SafeView/index';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { List } from 'react-native-paper';

import {
  Header, Title, CaseItem, Container, ChatTitle, ButtonChat,
  PersonButton, description, ImagePerson, ViewInfo, TextName,
  TextDescription, ViewItem, ImageSupp,
} from './styles';

export const Cases: React.FC = () => {
  const navigation = useNavigation();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SafeAreaView style={{ paddingHorizontal: 30 }}>

      <Header>
        <Title>Meus Casos</Title>
      </Header>

      <ScrollView style={{ flex: 1, marginTop: 40 }}>

        <CaseItem>
          <PersonButton onPress={() => navigation.navigate('InfoCase')}>
            <ImagePerson source={{ uri: 'https://api.lorem.space/image/face?w=150&h=150' }} />
            <ViewInfo>
              <TextName>Maria Carolina da Silva</TextName>
              <TextDescription>Santana de Parnaíba, SP | 39 Anos</TextDescription>
            </ViewInfo>
          </PersonButton>

          <List.Accordion
            theme={{ colors: { background: 'transparent' } }}
            title=""
            titleStyle={{ display: 'none' }}
            descriptionStyle={description}
            style={{ padding: 0 }}
            left={() => <Container />}
            expanded={isExpanded}
          >
            <List.Item
              style={{ padding: 0 }}
              title=""
              left={() => (
                <ViewItem onPress={() => navigation.navigate('Chat')}>
                  <ImageSupp source={{ uri: 'https://api.lorem.space/image/face?w=150&h=150' }} />
                  <ViewInfo>
                    <TextName>Vitória de Souza</TextName>
                    <TextDescription>Oi, tudo bem? Acho que vi...</TextDescription>
                  </ViewInfo>
                </ViewItem>
              )}
            />
            <List.Item
              style={{ padding: 0 }}
              title=""
              left={() => (
                <ViewItem onPress={() => navigation.navigate('Chat')}>
                  <ImageSupp source={{ uri: 'https://api.lorem.space/image/face?w=150&h=150' }} />
                  <ViewInfo>
                    <TextName>Carlos Miranda</TextName>
                    <TextDescription>Sim, eu falei com ele sobre isso...</TextDescription>
                  </ViewInfo>
                </ViewItem>
              )}
            />
          </List.Accordion>

          <ButtonChat onPress={() => setIsExpanded((current) => !current)}>
            <ChatTitle>Conversas</ChatTitle>
            <Icon
              name={isExpanded ? 'chevron-up' : 'chevron-down'}
              color="#575757"
              type="feather"
              size={30}
              style={{ marginLeft: 7, marginTop: 4 }}
              tvParallaxProperties={undefined}
            />
          </ButtonChat>
        </CaseItem>

      </ScrollView>

    </SafeAreaView>
  );
};
