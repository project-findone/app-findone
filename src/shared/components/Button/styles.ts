import styled, { DefaultTheme } from 'styled-components/native';

interface Props extends DefaultTheme {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

export const Touchable = styled.TouchableOpacity<Props>`
    align-items: center;
    justify-content: center;
    padding: 14px;
    width: 100%;
    height: 56px;
    margin-top: ${({ marginTop }) => (marginTop || 0)}px;
    margin-bottom: ${({ marginBottom }) => (marginBottom || 0)}px;
    margin-left: ${({ marginLeft }) => (marginLeft || 0)}px;
    margin-right: ${({ marginRight }) => (marginRight || 0)}px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const Text = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT_INVERTED};
    font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD};
    text-align: center;
`;
