import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

interface InputPinProps extends ViewProps {
  InputContainerIsFocused: boolean;
  DigitIsFocused: boolean;
}

const colors = {
  primary: '#4FA8A8',
  secondary: '#D1D1D1',
};

export const InputPinSection = styled.View`
  align-items: center;
  margin-top: 5vh;
`;

export const HiddenTextInput = styled.TextInput`
  position: absolute;
  width: 1px;
  opacity: 0;
`;

export const InputPinContainer = styled.Pressable`
  width: 100%;
  height: 18vw;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputPin = styled.View<InputPinProps>`
  height: 100%;
  width: 20%;
  border-width: 2px;
  border-radius: 15px;
  padding: 12px;
  border-color: ${({ DigitIsFocused, InputContainerIsFocused }) => (DigitIsFocused && InputContainerIsFocused
    ? colors.primary : colors.secondary)};
`;

export const InputPinText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`;
