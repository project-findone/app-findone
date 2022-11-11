import { SafeAreaView } from '@shared/components/SafeView/index';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';

import {
  Header, Title, CaseItem, Container, ChatTitle, ButtonChat,
  PersonButton, description,
} from './styles';

export const Cases: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SafeAreaView style={{ paddingHorizontal: 30 }}>
      <Header>
        <Title>Meus Casos</Title>
      </Header>
      <ScrollView style={{ flex: 1, marginTop: 25 }}>
        <CaseItem>
          <PersonButton />
          <List.Accordion
            theme={{ colors: { background: 'transparent' } }}
            title=""
            titleStyle={{ display: 'none' }}
            descriptionStyle={description}
            style={{
              borderRadius: 20,
              padding: 0,
              zIndex: 9,
            }}
            left={() => <Container />}
            expanded={isExpanded}
            onPress={() => setIsExpanded((current) => !current)}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
          <ButtonChat onPress={() => setIsExpanded((current) => !current)}>
            <ChatTitle>Conversas</ChatTitle>
          </ButtonChat>
        </CaseItem>

        <CaseItem>
          <PersonButton />
          <List.Accordion
            theme={{ colors: { background: 'transparent' } }}
            title=""
            titleStyle={{ display: 'none' }}
            style={{
              borderRadius: 20,
              padding: 0,
              zIndex: 9,
            }}
            left={() => <Container />}
            expanded={isExpanded}
            onPress={() => setIsExpanded((current) => !current)}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
          <ButtonChat onPress={() => setIsExpanded((current) => !current)}>
            <ChatTitle>Conversas</ChatTitle>
          </ButtonChat>
        </CaseItem>

      </ScrollView>
    </SafeAreaView>
  );
};
