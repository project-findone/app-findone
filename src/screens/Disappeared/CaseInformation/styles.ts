import styled from 'styled-components/native';

export const BarUp = styled.View`
    position: absolute;
    height: 60%;
    width: 100%;
    z-index: 1;
`;

export const Header = styled.View`
    position: absolute;
    width: 10%;
    height: 10%;
    margin-top: 8%;
    margin-left: 4%;
`;

export const ScrollView = styled.ScrollView`
    position: absolute;
    height: 104%;
    width: 100%;
`;

export const ViewInformações = styled.View`
    height: 100%;
    width: 100%;
    margin-top: 80%;
    background-color: #FFF;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    align-items: center;
    z-index: 1;
`;

export const ImageHeader = styled.Image`
    height: 100%;
    width: 100%;
`;

export const ViewDadosImagem = styled.View`
    position: absolute;
    width: 100%;
    height: 20%;
    margin-top: 57%;
    padding: 2%;
`;

export const TextImagem = styled.Text`
    color: #FFF;
    font-size: 27px;
    font-weight: 800;
    text-align: center;
`;

export const TextImagemMenor = styled.Text`
    color: #FFF;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
`;

export const ViewRow = styled.View`
    flex-direction: row;
    margin-top: 5%;
    height: 30px;
`;

export const ViewRowBlack = styled.View`
    flex-direction: row;
    height: 50px;
`;

export const ViewRow2 = styled.View`
    flex-direction: row;
    height: 30px;
`;

export const ViewDescMenor = styled.View`
    width: 40%;
    height: 25px;
    margin-left: 7%;
`;

export const ViewDescMaior = styled.View`
    width: 88%;
    height: 25px;
    margin-left: 7%;
`;

export const ViewDescMaior2 = styled.View`
    width: 88%;
    height: 25px;
    margin-left: 7%;
    margin-top: 5%;
`;

export const ViewDescBlack = styled.View`
    width: 40%;
    height: 30px;
    margin-left: 7%;
`;

export const ViewDescBlackMaior = styled.View`
    width: 78%;
    margin-left: 7%;
    margin-right: 10%;
`;

export const TextDescAzul = styled.Text`
    color: #0288D1;
    font-size: 18px;
    font-weight: 700;
    text-align: justify;
`;

export const TextDescBlack = styled.Text`
    color: #000;
    font-size: 20px;
    text-align: justify;
`;

export const TextResponsavelBlack = styled.Text`
    color: #000;
    font-size: 18px;
    text-align: justify;
`;

export const ViewButton = styled.View`
    width: 85%;
    padding: 3px;
    border-Radius: 100px;
    margin-Top: 2%;
    margin-bottom: 2%;
    background-color: #F2F2F2;
    flex-direction: row;
`;

export const ViewImage = styled.View`

`;

export const ImagePerfil = styled.Image`
    height: 65px;
    width: 65px;
    border-radius: 100px;
    margin-left: 1px;
`;

export const ViewTextButton = styled.View`
    width: 50%;
    margin-left: 4%;
    margin-top: 5px;
`;

export const ButtonChat = styled.TouchableOpacity`
    align-items: center;
    padding: 8.5px;
    height: 65px;
    width: 65px;
    border-radius: 50px;
    margin-left: 3%;
    background-color: #0288D1;
    aspect-ratio: 1;
    border-radius: 100px;
    border: 3px solid #DADADA;
`;
