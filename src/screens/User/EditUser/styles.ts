import styled from 'styled-components/native';
import { Image } from 'react-native';

export const ScrollView = styled.ScrollView`
    padding: 7% 10% 0 10%;
`;

export const TopGroup = styled.View`
    position: relative;
`;

export const Logo = styled(Image)`
    width: 32px;
    max-width: 150px;
    max-height: 150px;
    height: 32px;
    align-self: center;
`;

export const Text1 = styled.Text`
    color: #fff;
    font-Weight: 700;
    font-size: 18px;
    text-align: center;
    padding: 4px;
`;

export const Button1 = styled.TouchableOpacity`
    align-items: center;
    padding: 12px;
    width: 100%;
    margin-top: 40px;
    border-radius: 30px;
    background-color: #1CB8C2;
`;

export const Text2 = styled.Text`
    color: #DF7C7C;
    font-Weight: 600;
    font-size: 18px;
    text-align: center;
    padding: 4px;
`;

export const Button2 = styled.TouchableOpacity`
    align-items: center;
    padding: 10px;
    width: 100%;
    margin: 40px 0 55px 0;
    border-radius: 30px;
    border: 3px #DF7C7C solid;
`;

export const ImageGroup = styled.TouchableOpacity`
    width: 120px;
    height: 120px;
    aspect-ratio: 1;
    position: relative;
    align-self: center;
`;

export const ImagePerfil = styled.Image`
    height: 120px;
    width: 120px;
    border: 5px #D9D9D9 solid;
    border-radius: 100px;
`;

export const IconView = styled.View`
    height: 45px;
    width: 45px;
    background-color: #38ADB5;
    position: absolute;
    border-radius: 50px;
    bottom: 0;
    right: 0;
    justify-content: center;
    border: 4px #FFF solid;
`;
