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

export const ScrollView = styled.ScrollView<Props>`
    padding-left: 35px;
    padding-right: 35px;
    height: 100%;
    width: 100%;
    margin-top: 20px;
`;
export const Viewinicio = styled.View`
    border: 2px #DF7C7C solid;
    width: 100%;
    border-radius: 50px;
    height: 35px;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
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

export const CheckboxContainer = styled.View`
    flex-direction: row;
    margin-top: 15px;
`;
export const Label = styled.Text`
    color: #545454;
    font-size: 16px;
    margin: 8px;
`;

export const Cadastro = styled.View`
    flex-direction: row;
    align-self: center;
    margin-top: 15px;
`;

export const Text2 = styled.Text`
    color: #8F8F8F;
    font-size: 16px;
`;

export const Textlink1 = styled.Text`
    color: #00C2C6;
    font-size: 16px;
`;

export const Textlink = styled.Text`
    color: #00C2C6;
    font-size: 16px;
    margin-top: 5%;
    text-align: right;
`;

export const Text = styled.Text`
    color: #DF7C7C;
    font-weight: 600;
`;

export const TextButton = styled.Text`
    color: #FFF;
    font-weight: 600;
    margin: 5px;
    font-size: 15px;
    font-stretch: expanded;
`;
