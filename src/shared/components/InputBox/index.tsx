import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInputProps } from 'react-native';
import {
  ButtonContainer, MainContainer, TextInput, TouchableOpacity, ViewContainer,
} from './styles';

type IProps = {
  onSendPress: () => void
};

export const InputBox : React.FC<TextInputProps & IProps> = ({
  onChangeText, value, onSendPress, ...rest
}) => (
  <ViewContainer>
    <MainContainer>
      <TextInput
        multiline
        value={value}
        onChangeText={onChangeText}
        placeholder="Mensagem"
        {...rest}
      />
    </MainContainer>

    <TouchableOpacity onPress={onSendPress}>
      <ButtonContainer>
        <MaterialIcons name="send" size={24} color="#fff" />
      </ButtonContainer>
    </TouchableOpacity>

  </ViewContainer>
);
