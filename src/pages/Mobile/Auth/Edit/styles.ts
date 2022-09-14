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
    font-Weight: 700;
    font-size: 14px;
    text-align: center;
    padding: 4px;
`;

export const Button1 = styled.TouchableOpacity`
    align-items: center;
    padding: 10px;
    width: 100%;
    margin-top: 30px;
    border-radius: 30px;
    background-color: #1CB8C2;
`;

export const Text2 = styled.Text`
    color: #DF7C7C;
    font-Weight: 600;
    font-size: 14px;
    text-align: center;
    padding: 4px;
`;

export const Button2 = styled.TouchableOpacity`
    align-items: center;
    padding: 10px;
    width: 100%;
    margin-top: 30px;
    border-radius: 30px;
    border: 3px #DF7C7C solid;
`;

export const ImageGroup = styled.TouchableOpacity`
    width: 120;
    height: 120;
    aspect-ratio: 1;
    position: relative;
    margin-left: 25vw;
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
