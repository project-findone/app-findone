import styled from 'styled-components/native';

export const Header = styled.View`
    flex-direction: row;
    width: 100%;
    margin-top: 60px;
`;

export const Container = styled.View`
    padding: 0px 30px 0px 30px;
    height: 100%;
    width: 100%;
`;
export const Title = styled.Text`
    font-size: 33px;
    font-weight: 700;
    margin-top: 5px;
`;

export const ButtonBlue = styled.TouchableOpacity`
    padding: 14px;
    width: 100%;
    margin-top: 30px;
    border-radius: 15px;
    border-Color: #008DAC;
    border-Width: 5px;
    flex-direction: row;
`;

export const ButtonGreen = styled.TouchableOpacity`
    padding: 12px;
    width: 100%;
    margin-top: 45px;
    border-radius: 15px;
    border-Color: #00B7A1;
    border-Width: 5px;
`;

export const Text = styled.Text`
    color: #000;
    font-size: 18px;
    font-weight: bold;
`;

export const TextMenor = styled.Text`
    color: #000;
    font-size: 13px;
`;

export const ViewText = styled.View`
    margin-left: 8%;
`;

export const ViewImage = styled.View`

`;

export const ImagePerfil = styled.Image`
    height: 60;
    width: 60;
`;
