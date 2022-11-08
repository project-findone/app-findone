import React, { useState, useCallback } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import UnknownImage from '@shared/assets/unknown.png';

import SafeView from '@shared/components/SafeView';
import { ChatMessage } from '@shared/components/ChatMessage';
import { InputBox } from '@shared/components/InputBox';
import Chats from './data/Chats';
import {
  Header, Content, ViewImage, ImagePerfil, ViewText, Text, TextMenor, ContentMessage,
} from './styles';

export const Chat: React.FC = () => {
  const navigation = useNavigation();
  const [chatRoomData, setChatRoomData] = useState<{
    id: string,
    content: string,
    createdAt: string | Date,
    user: {
      id: string,
      name: string
    }
  }[]>(Chats.messages);

  const [messageInput, setMessageInput] = useState<string>('');

  const onSendPress = useCallback(() => {
    if (messageInput.length > 0) {
      const message = {
        id: `m${chatRoomData.length + 1}`,
        content: messageInput,
        createdAt: new Date(),
        user: {
          id: 'u1',
          name: 'Vadim',
        },
      };
      setChatRoomData((state) => {
        const newChatRoomData = state.concat(message);
        return newChatRoomData;
      });
      console.log(chatRoomData);
    }
  }, [messageInput, chatRoomData]);

  return (
    <SafeView>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-left"
            color="#fff"
            type="octicon"
            size={60}
            tvParallaxProperties={undefined}
          />
        </TouchableOpacity>

        <ViewText>
          <Text>Lukas</Text>
          <TextMenor>
            Responsável por Maria
          </TextMenor>
        </ViewText>
        <ViewImage>
          <ImagePerfil source={UnknownImage} />
        </ViewImage>

      </Header>

      <Content>
        <ContentMessage>

          <FlatList
            data={chatRoomData}
            renderItem={({ item }) => <ChatMessage message={item} />}
          />

          <InputBox
            onChangeText={setMessageInput}
            onSendPress={onSendPress}
          />

        </ContentMessage>
      </Content>
    </SafeView>
  );
};
