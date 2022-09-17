import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Logo = styled(Image)`
    width: 32vw;
    max-width: 150px;
    max-height: 150px;
    height: 32vw;
    align-self: center;
`;

export const Text1 = styled.Text`
    color: #fff;
    font-Weight: 600;
    font-size: 20px;
    text-align: center;
    padding: 4px;
`;

export const Button1 = styled.TouchableOpacity`
    align-items: center;
    padding: 9px;
    width: 100%;
    margin-top: 40px;
    border-radius: 30px;
    border-Color: #00B9C6;
    border-Width: 3.5;
    background-color: #1CB8C2;
`;

export const Text2 = styled.Text`
    color: #00B9C6;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    padding: 4px;
`;

export const Button2 = styled.TouchableOpacity`
    align-Items: 'center';
    padding: 9px;
    width: 100%;
    border-Radius: 30px;
    border-Color: #00B9C6;
    border-Width: 3;
    margin-Top: 60px;
    margin-bottom: 80px;
`;

export const ImageGroup = styled.TouchableOpacity`
    width: 120;
    height: 120;
    aspect-ratio: 1;
    position: relative;
    margin-left: 25vw;
`;

export const TextImage = styled.Text`
    align-self: center;
    color: #000;
    font-Weight: 600;
    font-Size: 18;
    margin-Top: 30;
    margin-bottom: 40;

`;

export const ImagePerfil = styled.Image`
    height: 120;
    width: 120;
    border: 5px #D9D9D9 solid;
    border-radius: 100%;
`;

export const IconView = styled.View`
    height: 45px;
    width: 45px;
    background-color: #38ADB5;
    position: absolute;
    border-radius: 50;
    bottom: 0;
    right: 0;
    justify-content: center;
    border: 4px #FFF solid;
`;
