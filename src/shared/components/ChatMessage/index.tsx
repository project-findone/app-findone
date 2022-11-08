import moment from 'moment';
import React from 'react';
import {
  MessageBox, TextMessage, TextName, TextTime, ViewContainer,
} from './styles';
import { Message } from './types';

export type ChatMessageProps = {
  message: Message;
};

export const ChatMessage = (props: ChatMessageProps) => {
  const { message } = props;

  const isMyMessage = () => message.user.id === 'u1';

  return (

    <ViewContainer>
      <MessageBox style={{
        backgroundColor: isMyMessage() ? '#bce1f4' : '#fff',
        marginLeft: isMyMessage() ? 60 : 0,
        marginRight: isMyMessage() ? 0 : 60,
      }}
      >
        {!isMyMessage() && <TextName>{message.user.name}</TextName>}
        <TextMessage>{message.content}</TextMessage>
        <TextTime>{moment(message.createdAt).fromNow()}</TextTime>
      </MessageBox>
    </ViewContainer>

  );
};
