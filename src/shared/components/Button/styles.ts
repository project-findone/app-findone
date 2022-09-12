import styled, { DefaultTheme } from 'styled-components/native';

interface Props extends DefaultTheme {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

export const Touchable = styled.TouchableOpacity<Props>`
    align-items: center;
    padding: 10px;
    width: 100%;
    margin-top: ${({ marginTop }) => (marginTop || 0)}px;
    margin-bottom: ${({ marginBottom }) => (marginBottom || 0)}px;
    margin-left: ${({ marginLeft }) => (marginLeft || 0)}px;
    margin-right: ${({ marginRight }) => (marginRight || 0)}px;
    border-radius: 30;
    background-color: #1CB8C2;
`;

export const Text = styled.Text`
    color: #FFFF;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    padding: 4px;
`;
