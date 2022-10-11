import styled from 'styled-components/native';

export const Background = styled.ImageBackground`
    height: 100%;
    width: 100%;
    position: absolute;
`;
export const Logo = styled.Image`
    margin-top: 25%;
    height: 250px;
    aspect-ratio: 1.1;
    align-self: center;
    margin-bottom: 50px;
`;
export const Tittle = styled.Text`
    font-size: 38px;
    font-weight: 700;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
`;
export const ButtonProsseguir = styled.TouchableOpacity`
    position: absolute;
    bottom: 10%;
    align-items: center;
    align-self: center;
    padding: 10px;
    width: 75%;
    margin-top: 40px;
    border-radius: 30px;
    background-color: white;
`;
export const TextButton = styled.Text`
    color: #106F8D;
    font-weight: 700;
    margin: 5px;
    font-size: 20px;
`;
