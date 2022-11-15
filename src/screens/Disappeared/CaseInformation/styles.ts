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

export const Container = styled.View<{ error: boolean }>`
    height: ${({ error }) => (error ? 100 : 104)}%;
    ${({ error }) => (error ? 'align-items: center; justify-content: center; padding: 16px' : '')}
`;

export const ViewInformações = styled.View`
    height: 100%;
    width: 100%;
    margin-top: 80%;
    background-color: #FFF;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    z-index: 1;
    padding: 6% 8% 6% 8%;
`;

export const ImageHeader = styled.Image`
    height: 100%;
    width: 100%;
`;

export const ViewDadosImagem = styled.View`
    position: absolute;
    align-self: center;
    width: 90%;
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

export const ViewDescMaior2 = styled.View`
    width: 88%;
    height: 25px;
    margin-top: 5%;
`;

export const ViewDescBlackMaior = styled.View`
    width: 78%;
`;

export const TextDescAzul = styled.Text`
    color: #0288D1;
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.MD};
    font-family: ${({ theme: { FONT_FAMILY } }) => FONT_FAMILY.SEMIBOLD};
    text-align: justify;
`;

export const ViewButton = styled.View`
    width: 85%;
    align-self: center;
    justify-self: flex-end;
    padding: 3px;
    border-Radius: 100px;
    margin-top: 8%;
    margin-bottom: 2%;
    background-color: #F2F2F2;
    flex-direction: row;
    justify-content: space-between;
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
    margin-top: 5px;
`;

export const ButtonChat = styled.TouchableOpacity`
    align-items: center;
    padding: 8.5px;
    height: 65px;
    width: 65px;
    border-radius: 50px;
    background-color: #0288D1;
    aspect-ratio: 1;
    border-radius: 100px;
    border: 3px solid #DADADA;
    right: 0;
`;

export const CharacContainer = styled.View`
    flex-flow: row wrap;
    width: 100%;
`;

export const CharacGroup = styled.View<{ positionType: 'right' | 'left'; initialGroup?: boolean }>`
    width: 45%;
    margin-left: ${({ positionType }) => (positionType === 'right' ? 4 : 0)}%;
    margin-top: ${({ initialGroup }) => (initialGroup ? 0 : 4)}%;
`;

export const InfoText = styled.Text<{ positionType: 'top' | 'bottom'; owner?: boolean }>`
    font-family: ${({ positionType, theme: { FONT_FAMILY } }) => (positionType === 'top' ? FONT_FAMILY.SEMIBOLD : FONT_FAMILY.REGULAR)};
    font-size: ${({ positionType, owner, theme: { FONT_SIZE } }) => (owner ? FONT_SIZE.SM : positionType === 'top' ? FONT_SIZE.MD : FONT_SIZE.X_MD)};
    color: ${({ positionType, theme: { COLORS } }) => (positionType === 'top' ? COLORS.SECONDARY : COLORS.TITLE_900)};
    margin-top: ${({ positionType, owner }) => (owner ? 0 : positionType === 'bottom' ? 4 : 0)}px;
`;

// estilo modal

export const CenteredViewModel = styled.View`
    align-items: center;
    justify-content: center;
`;

export const ModelTransparent = styled.View`
    flex: 1;
    justify-content: center;
    background: rgba(0,0,0,0.7);
`;

export const ViewModel = styled.View`
    margin: 8%;
    background-color: #FFF;
    border-radius: 20px;
    padding: 30px;
    align-items: center;
`;

export const TextCaso = styled.Text`
    color: #000;
    font-size: 28px;
    font-weight: bold;
    width: 100%;
    text-align: justify;
`;

export const ButtonModelYes = styled.TouchableOpacity`
    align-items: center;
    border: #00C673 3px solid;
    padding: 10px;
    width: 55%;
    margin-top: 8%;
    border-radius: 7px;
    background-color: #fff;
    margin-right: 5px;
`;

export const ButtonModelNo = styled.TouchableOpacity`
    align-items: center;
    border: #DF7C7C 3px solid;
    padding: 10px;
    width: 55%;
    margin-top: 8%;
    border-radius: 7px;
    background-color: #fff;
`;

export const ViewRow = styled.View`
    flex-direction: row;
`;

export const TextButtonModelYes = styled.Text`
    color: #00C673;
    font-weight: 600;
    margin: 3px;
    font-size: 22px;
    font-stretch: expanded;
`;

export const TextButtonModelNo = styled.Text`
    color: #DF7C7C;
    font-weight: 600;
    margin: 3px;
    font-size: 22px;
    font-stretch: expanded;
`;
