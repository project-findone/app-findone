import styled from 'styled-components/native';

export const Header = styled.View`
    flex-direction: row;
    width: 100%;
    margin-top: 30px;
`;

export const Container = styled.ScrollView`
    padding: 0px 30px 0px 30px;
    height: 100%;
    width: 100%;
`;
export const Title = styled.Text`
    font-size: 33px;
    font-weight: 700;
    margin-left: 20px;
    margin-top: 5px;
`;

export const ButtonBlue = styled.TouchableOpacity`
    padding: 12px;
    width: 100%;
    margin-top: 60px;
    border-radius: 15px;
    border-Color: #008DAC;
    border-Width: 5px;
`;

export const TextBlue = styled.Text`
    color: #80AFB9;
    font-weight: 600;
    font-size: 26px;
    margin-top: 10px;
    margin-bottom: 5px;
`;

export const TextButtonBlue = styled.Text`
    color: #008DAC;
    font-weight: 700;
    font-size: 37px;
    font-stretch: expanded;
`;

export const ButtonGreen = styled.TouchableOpacity`
    padding: 12px;
    width: 100%;
    margin-top: 45px;
    border-radius: 15px;
    border-Color: #00B7A1;
    border-Width: 5px;
`;

export const TextGreen = styled.Text`
    color: #73BBB2;
    font-weight: 600;
    font-size: 26px;
    margin-top: 10px;
    margin-bottom: 25px;
`;

export const TextButtonGreen = styled.Text`
    color: #00B7A1;
    font-weight: 700;
    font-size: 37px;
    font-stretch: expanded;
`;

export const ViewComunicado = styled.View`
    padding: 12px;
    width: 100%;
    margin-top: 70px;
    border-radius: 15px;
    border-Color: #F1F1F1;
    background-color: #F1F1F1;
    border-Width: 3.5px;
`;

export const TextComunicado = styled.Text`
    color: #5F5F5F;
    font-size: 17px;
    margin-top: 5px;
    margin-bottom: 5px;
`;
