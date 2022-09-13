import styled, { DefaultTheme } from 'styled-components/native';

interface Props extends DefaultTheme {
  error: boolean;
  marginTop: number;
}

export const Container = styled.View<Props>`
    width: 100%;
    height: 60px;
    margin-top: 22px;
`;

export const TextInput = styled.TextInput<Props>`
    height: 80%;
    border-width: 2px;
    border-color: ${({ error }) => (error ? 'red' : '#A7A7A7')};
    border-radius: 6px;
    padding: 15px;
    justify-content: center;
`;

export const LabelContainer = styled.View<Props>`
    background-color: #FFF;
    align-self: flex-start;
    padding: 6px;
    margin-bottom: -14px;
    margin-left: 18px;
    z-index: 1;
`;

export const LabelText = styled.Text<Props>`
    font-size: 14px;
    color: ${({ error }) => (error ? 'red' : 'black')};
`;

export const ErrorText = styled.Text`
    color: red;
    font-size: 12px;
`;
