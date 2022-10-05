import styled, { DefaultTheme } from 'styled-components/native';

interface Props extends DefaultTheme {
  error: boolean;
  marginTop: number;
  width: number;
}

export const ButtonBlue = styled.TouchableOpacity`
    padding: 12px;
    width: 100%;
    margin-top: 60px;
    border-radius: 15px;
    border-Color: #008DAC;
    border-Width: 5px;
`;

export const Text = styled.Text`
    color: #000;
    font-size: 16px;
    font-weight: bold;
`;

export const TextMenor = styled.Text`
    color: #000;
    font-size: 12px;
`;

export const Container = styled.View<Props>`
    width: ${({ width }) => width || 100}%;
    height: 75px;
    margin-top: ${({ marginTop }) => marginTop || 20}px;
`;

export const TextInput = styled.TextInput<Props>`
    height: 80%;
    color: ${({ theme }) => theme.COLORS.CAPTION_700};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.X_SM};
    border: 2px solid;
    border-color: ${({ error, theme }) => (error
    ? theme.COLORS.ALERT
    : theme.COLORS.CAPTION_400)};
    border-radius: 6px;
    padding: 15px;
    justify-content: center;
`;

export const LabelContainer = styled.View<Props>`
    background-color: ${({ theme }) => theme.COLORS.BG};
    align-self: flex-start;
    padding: 6px;
    margin-bottom: -14px;
    margin-left: 18px;
    z-index: 1;
`;

export const LabelText = styled.Text<Props>`
    font-size: ${({ theme }) => theme.FONT_SIZE.SM};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ error, theme }) => (error
    ? theme.COLORS.ALERT
    : theme.COLORS.CAPTION_700)};
`;

export const ErrorText = styled.Text`
    margin-top: 4px;
    color: ${({ theme }) => theme.COLORS.ALERT};
    font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.XX_SM};
`;
