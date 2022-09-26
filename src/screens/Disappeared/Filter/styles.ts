import styled, { DefaultTheme } from 'styled-components/native';
import { ScrollViewProps } from 'react-native';

interface Props extends DefaultTheme, ScrollViewProps {}

export const Container = styled.View`
    width: '100%';
    padding: 8% ;
    padding-top: 20px;
    align-items: 'center';
`;

export const Header = styled.View`
    flex-direction: row;
    width: 100%;
    margin-top: 20px;
`;

export const TextAge = styled.Text`
    text-align: center;
    color: #000;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 5px;
`;

export const TextAge2 = styled.Text`
    text-align: center;
    color: #000;
    font-size: 50px;
    margin-bottom: 25px;
    margin-left: 2.7%;
    margin-right: 2.7%;
`;

export const ContainerAge = styled.View`
    align-items: center;
    flex-direction: row;
    width: 100%;
`;

export const ScrollView = styled.ScrollView<Props>`
    padding-left: 35px;
    padding-right: 35px;
    height: 100%;
    width: 100%;
    margin-top: 20px;
`;
export const Title = styled.Text`
    font-size: 32px;
    font-weight: 700;
    margin-left: 15px;
    margin-top: 5px;
`;

export const Button = styled.TouchableOpacity`
    align-items: center;
    padding: 10px;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 30px;
    border-radius: 30px;
    background-color: #1CB8C2;
`;

export const TextButton = styled.Text`
    color: #FFF;
    font-weight: 600;
    margin: 5px;
    font-size: 15px;
    font-stretch: expanded;
`;
