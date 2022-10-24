import styled from 'styled-components/native';

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
`;

export const ButtonModel = styled.TouchableOpacity`
    align-items: center;
    padding: 10px;
    width: 100%;
    margin-top: 8%;
    border-radius: 30px;
    background-color: #06B6C0;
`;

export const TextButtonModel = styled.Text`
    color: #FFF;
    font-weight: 600;
    margin: 3px;
    font-size: 22px;
    font-stretch: expanded;
`;
