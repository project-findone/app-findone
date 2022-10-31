import styled from 'styled-components/native';

export const CenteredViewModel = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 22px;
`;

export const ModelTransparent = styled.View`
    flex: 1;
    justify-content: center;
    background: rgba(0,0,0,0.7);
`;

export const ViewModel = styled.View`
    margin: 15px;
    background-color: #FFF;
    border-radius: 20px;
    padding: 20px;
    align-items: center;
`;

export const ButtonBlueModal = styled.View`
    padding: 12px;
    width: 100%;
    border-radius: 15px;
    border-Color: #1691D4;
    border-Width: 5px;
`;

export const ButtonGreenModal = styled.View`
    padding: 12px;
    width: 100%;
    margin-top: 8%;
    border-radius: 15px;
    border-Color: #0F9D58;
    border-Width: 5px;
`;

export const ButtonYellowModal = styled.View`
    padding: 12px;
    width: 100%;
    margin-top: 8%;
    border-radius: 15px;
    border-Color: #E2C425;
    border-Width: 5px;
`;

export const ViewImageModal = styled.View`
    width: 55px;
    height: 55px;
    align-items: center;
`;

export const ViewRow = styled.View`
    flex-direction: row;
`;

export const ViewTextModal = styled.View`
    margin-left: 5%;
`;

export const TextCaso = styled.Text`
    color: #000;
    font-size: 24px;
    font-weight: bold;
`;

export const TextCorCaso = styled.Text`
    color: #878787;
    font-size: 18px;
`;

export const ViewTextExplicacao = styled.View`
    margin-top: 2%;
`;

export const TextExplicacao = styled.Text`
    color: #000;
    font-size: 16px;
    text-align: justify;
`;

export const UserImage = styled.Image`
  height: 55px;
  aspect-ratio: 1;
  border-radius: 100px;
  border: 4.5px solid #E2C425;
`;

export const ButtonModel = styled.TouchableOpacity`
    align-items: center;
    padding: 10px;
    width: 65%;
    margin-top: 8%;
    border-radius: 30px;
    background-color: #06B6C0;
`;

export const TextButtonModel = styled.Text`
    color: #FFF;
    font-weight: 600;
    margin: 3px;
    font-size: 25px;
    font-stretch: expanded;
`;
