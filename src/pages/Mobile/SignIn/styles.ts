import styled from 'styled-components/native';

import { Image } from 'react-native';

export const Logo = styled(Image)`
    width: 32vw;
    max-width: 150px;
    max-height: 150px;
    height: 32vw;
    align-self: center;
`;
export const Title = styled.Text`
    font-size: 32px;
    font-weight: 700;
    margin-top: 15px;
`;

export const CheckboxContainer = styled.View`
    flex-direction: row;
    margin-top: 15px;
`;

export const GoToRegisterContainer = styled.View`
    flex-direction: row;
    align-self: center;
    margin-top: 15px;
`;

export const GoToRegiserTitle = styled.Text`
    color: #8F8F8F;
    font-size: 16px;
`;

export const GoToRegisterLink = styled.Text`
    color: #00C2C6;
    font-size: 16px;
`;

export const GoToForgotPassLink = styled.Text`
    color: #00C2C6;
    font-size: 16px;
    margin-top: 5%;
    text-align: right;
`;
