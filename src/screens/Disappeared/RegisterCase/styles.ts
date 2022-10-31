import styled from 'styled-components/native';

export const Container = styled.View`
    width: '100%';
    padding: 8% ;
    align-items: 'center';
`;

export const Header = styled.View`
    flex-direction: column;
    width: 100%;
    margin-top: 30px;
`;

export const ScrollView = styled.ScrollView`
    padding-left: 35px;
    padding-right: 35px;
    height: 100%;
    width: 100%;
`;

export const Title = styled.Text`
    font-size: 32px;
    font-weight: 700;
    text-align: center;
`;

export const IconBack = styled.TouchableOpacity`
    position: absolute;
    height: 50px;
    width: 50px;
    z-index: 1;
`;

export const Title2 = styled.Text`
    font-size: 32px;
    font-weight: 700;
    margin-top: 40px;
`;

export const CheckboxContainer = styled.View`
    flex-direction: row;
    margin-top: 15px;
`;
export const Label = styled.Text`
    color: #545454;
    font-size: 16px;
    margin: 8px;
`;

export const Cadastro = styled.View`
    flex-direction: row;
    align-self: center;
    margin-top: 15px;
`;

export const Text2 = styled.Text`
    color: #8F8F8F;
    font-size: 16px;
`;

export const Textlink1 = styled.Text`
    color: #00C2C6;
    font-size: 16px;
`;

export const Textlink = styled.Text`
    color: #00C2C6;
    font-size: 16px;
    margin-top: 5%;
    text-align: right;
`;

export const TextButton = styled.Text`
    color: #FFF;
    font-weight: 600;
    margin: 5px;
    font-size: 15px;
    font-stretch: expanded;
`;

export const ImageArea = styled.TouchableOpacity`
    width: 100%;
    height: 120px;
    align-items: center;
    margin-top: 25px;
`;

export const ImagePerfil = styled.Image`
    height: 120px;
    width: 120px;
    border-radius: 100px;
`;

export const IconView = styled.View`
    height: 40px;
    width: 40px;
    background-color: #38ADB5;
    position: absolute;
    border-radius: 50px;
    bottom: 0;
    right: 0;
    justify-content: center;
`;

export const ImageButton = styled.TouchableOpacity`
    height: 120px;
    width: 120px;
`;

export const Align = styled.View`
    align-items: center;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-top: 8px;
`;
