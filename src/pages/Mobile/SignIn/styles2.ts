import styled from "styled-components/native";

import { Image } from "react-native";

export const Logo = styled(Image)`
    width: 32vw;
    max-width: 150px;
    max-height: 150px;
    height: 32vw;
    align-self: center;
`
export const Title = styled.Text`
    font-size: 32px;
    font-weight: 700;
    margin-top: 15px;
`

export const Button = styled.TouchableOpacity`
    align-items: center;
    padding: 10px;
    width: 100%;
    margin-top: 25px;
    border-radius: 30px;
    background-color: #1CB8C2;
`


export const CheckboxContainer = styled.View`
    flex-direction: row;
    margin-top: 15px;
`
export const Label = styled.Text`
    color: #545454;
    font-size: 16px;
    margin: 8px;
`

export const Cadastro = styled.View`
    flex-direction: row;
    align-self: center;
`

export const Text2 = styled.Text`
    color: #8F8F8F;
    font-size: 16px;
`

export const Textlink1 = styled.Text`
    color: #00C2C6;
    font-size: 16px;
`

export const Textlink = styled.Text`
    color: #00C2C6;
    font-size: 16px;
    margin-top: 5%;
    text-align: right;
`

export const Text = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    padding: 4px;
`
