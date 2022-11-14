import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Icon } from 'react-native-elements';
import { List } from 'react-native-paper';

import {
  ViewPrincipal, Container, ChatTitle, ButtonChat,
  PersonButton, description, ImagePerson, ViewInfo, TextName,
  TextDescription, ViewItem, ImageSupp,
} from './styles';

interface Props {
  data: any
}

export const CaseItem: React.FC<Props> = ({ data }) => {
  const navigation = useNavigation();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ViewPrincipal>
      <PersonButton onPress={() => navigation.navigate('InfoCase')}>
        <ImagePerson source={{ uri: data.image }} />
        <ViewInfo>
          <TextName>{data.name}</TextName>
          <TextDescription>
            {data.city.length > 19 ? `${data.city.substr(0, 18)}...` : data.city}
            ,
            {` ${data.state} `}
            |
            {` ${data.age} `}
            Anos
          </TextDescription>
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
        {data.chats.map((chat: any) => (
          <List.Item
            style={{ padding: 0 }}
            title=""
            left={() => (
              <ViewItem onPress={() => navigation.navigate('Chat')}>
                <ImageSupp source={{ uri: chat.image }} />
                <ViewInfo>
                  <TextName>{chat.supporter}</TextName>
                  <TextDescription>{chat.lastmsg.length > 32 ? `${chat.lastmsg.substr(0, 31)}...` : chat.lastmsg}</TextDescription>
                </ViewInfo>
              </ViewItem>
            )}
          />
        ))}

      </List.Accordion>

      <ButtonChat onPress={() => (data.chats.length > 0 ? setIsExpanded((current) => !current) : '')}>
        {data.chats.length > 0
          ? (
            <>
              <ChatTitle>Conversas</ChatTitle>
              <Icon
                name={isExpanded ? 'chevron-up' : 'chevron-down'}
                color="#575757"
                type="feather"
                size={30}
                style={{ marginLeft: 7, marginTop: 4 }}
                tvParallaxProperties={undefined}
              />
            </>
          )
          : (
            <ChatTitle>Sem Conversas</ChatTitle>
          )}
      </ButtonChat>
    </ViewPrincipal>
  );
};
