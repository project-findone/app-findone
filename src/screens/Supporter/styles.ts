import styled from 'styled-components/native';

export const Header = styled.View`
    flex-direction: row;
    width: 100%;
    margin-top: 20px;
`;

export const Container = styled.View`
    padding-left: 30px;
    padding-right: 30px;
    height: 100%;
    width: 100%;
    margin-top: 20px;
`;

export const Title = styled.Text`
    font-size: 37px;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 8%;
`;

export const ViewButton = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-top: 3%;
`;

export const ButtonBlue = styled.TouchableOpacity`
    padding-top: 20px;
    width: 47%;
    margin-top: 40px;
    border-radius: 20px;
    border-Color: #08B9C3;
    border-Width: 8px;
`;

export const TextButtonBlue = styled.Text`
    color: #08B9C3;
    font-weight: 700;
    font-size: 25px;
    height: 90px;
    margin-top: 10px;
    text-align: center;
`;

export const ButtonGreen = styled.TouchableOpacity`
    padding-top: 20px;
    width: 47%;
    margin-top: 40px;
    border-radius: 20px;
    border-Color: #00CFB3;
    border-Width: 8px;
`;

export const TextButtonGreen = styled.Text`
    color: #00CFB3;
    font-weight: 700;
    font-size: 25px;
    height: 90px;
    margin-top: 10px;
    text-align: center;
`;
