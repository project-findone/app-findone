import styled from 'styled-components/native';

const colors = {
  primary: '#101820',
  secondary: '#4FA8A8',
  lightSecondary: '#F9FFFF',
  white: '#fff',
};

// styled components
export const OTPInputSection = styled.View`
  align-items: center;
  margin-vertical: 30px;
  margin-top: 5vh;
`;

export const HiddenTextInput = styled.TextInput`
  position: absolute;
  width: 1px;
  opacity: 0;
`;

export const OTPInputContainer = styled.Pressable`
  width: 100%;
  height: 18vw;
  flex-direction: row;
  justify-content: space-between;
`;

export const OTPInput = styled.View`
  height: 100%;
  width: 20%;
  border-width: 2px;
  border-radius: 15px;
  padding: 12px;
  border-color: #D1D1D1;
`;

export const OTPInputText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`;

export const OTPInputFocused = styled(OTPInput)`
  border-color: ${colors.secondary};
`;
