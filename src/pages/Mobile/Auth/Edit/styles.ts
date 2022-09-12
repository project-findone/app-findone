import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Logo = styled(Image)`
    width: 32vw;
    max-width: 150px;
    max-height: 150px;
    height: 32vw;
    align-self: center;
`;

export const Button = styled.TouchableOpacity`
    align-items: center;
    padding: 10px;
    width: 100%;
    margin-top: 30px;
    border-radius: 30px;
    background-color: #1CB8C2;
`;

export const Text = styled.Text`
    color: #fff;
    font-Weight: 600;
    font-size: 14;
    text-align: center;
    padding: 4px;
`;
