import styled from 'styled-components/native';

import { Image } from 'react-native';

export const Logo = styled(Image)`
    width: 124px;
    max-width: 150px;
    max-height: 150px;
    height: 124px;
    align-self: center;
`;
export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.X_LG};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    margin-top: 64px;
`;

export const CheckboxContainer = styled.View`
    flex-direction: row;
    margin-top: 15px;
`;

export const Footer = styled.View`
    width: 100%;
    align-items: center;
    margin-top: 80px;
`;

export const GoToRegisterContainer = styled.View`
    flex-direction: row;
    margin-top: 15px;
`;

export const GoToRegiserTitle = styled.Text`
    color: #8F8F8F;
    font-size: ${({ theme }) => theme.FONT_SIZE.X_SM};
    font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
`;

export const GoToRegisterLink = styled.Text`
    color: #00C2C6;
    font-size: ${({ theme }) => theme.FONT_SIZE.X_SM};
    font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
`;

export const GoToForgotPassLink = styled.Text`
    color: #00C2C6;
    font-size: ${({ theme }) => theme.FONT_SIZE.X_SM};
    font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
    margin-top: 5%;
    text-align: right;
`;
