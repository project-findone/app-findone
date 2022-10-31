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
    font-size: 30px;
    font-weight: 700;
    margin-top: 15px;
`;

export const TextLogo = styled.Text`
    fontSize: '101%';
    color: '#424242';
    marginTop: 35;
`;

export const TextLogo2 = styled.Text`
    fontSize: '101%';
    color: '#424242';
    marginTop: 50;
    textAlign: 'center';
`;
export const Button = styled.TouchableOpacity`
    align-items: 'center';
    padding: 9px;
    width: 100%;
    border-radius: 30px;
    border-color: #00B9C6;
    border-width: 3.5;
    margin-top: 50px;
`;

export const Text = styled.Text`
    color: #00B9C6;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    padding: 4px;
`;
