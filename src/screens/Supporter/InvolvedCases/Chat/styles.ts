import styled from 'styled-components/native';

export const Header = styled.View`
    background-color: #FFF;
    flex-direction: row;
    width: 100%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    z-index: 1;
    padding: 12% 10% 4% 6%;
    justify-content: space-between;
    align-items: center;
    background-color: #0288D1;
    margin-top: -${({ theme }) => theme.STATUS_BAR.HEIGHT};
`;

export const Content = styled.View`
    flex: 1;
    margin-top: -20px;
    background-color: #f2f2f2;
`;

export const ContentMessage = styled.View`
    flex: 1;
    margin-top: 20px;
`;

export const Title = styled.Text`
    font-size: 33px;
    font-weight: bold;
    margin-left: 20px;
    color: #fff;
`;

export const Text = styled.Text`
    color: #fff;
    font-size: 21.5px;
    font-weight: bold;
`;

export const TextMenor = styled.Text`
    color: #fff;
    font-size: 13px;
`;

export const ViewText = styled.View`
    margin-right: 5%;
`;

export const ViewImage = styled.View`

`;

export const ImagePerfil = styled.Image`
    height: 60px;
    width: 60px;
`;

export const InputMessage = styled.TextInput`

`;

export const Container = styled.View`
    width: 100%;
    height: 75px;
    background-color: aliceblue;
`;

export const TextInput = styled.TextInput`
    width: 92%;
    height: 60px;
    margin-left: 4%;
    color: #000;
    font-size:20px;
    border: 2px solid;
    border-color: #7B7B7B;
    background-color: #fff;
    border-radius: 50px;
    padding: 15px;
    justify-content: center;
    padding-left: 20px;
`;
