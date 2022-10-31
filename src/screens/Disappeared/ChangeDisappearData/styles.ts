import styled from 'styled-components/native';

export const Title = styled.Text`
    font-size: 32px;
    font-weight: 700;
    text-align: center;

`;
export const Label = styled.Text`
    color: #545454;
    font-size: 16px;
    margin: 8px;
`;
export const IconeDesaparecido = styled.Image`
  margin-top: 10%;
  height: 110px;
  width: 110px;
`;
export const IconeVoltar = styled.Image`
  height: 30px;
  width: 40px;
`;
export const ImageGroup = styled.TouchableOpacity`
    width: 120;
    height: 120;
    aspect-ratio: 1;
    position: relative;
    align-self: center;
    margin-top: 2px;

`;
export const IconView = styled.View`
    height: 45px;
    width: 45px;
    background-color: #38ADB5;
    position: absolute;
    border-radius: 50;
    bottom: 0;
    right: 0;
    justify-content: center;
    border: 4px #FFF solid;
`;
export const Title2 = styled.Text`
    font-size: 32px;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 3px;
    text-align: center;
`;
export const Registrar = styled.TouchableOpacity`
    align-items: center;
    padding: 10px;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 30px;
    border-radius: 30px;
    background-color: #1CB8C2;
`;
export const TextButton = styled.Text`
    color: #FFF;
    font-weight: 600;
    margin: 5px;
    font-size: 15px;
    font-stretch: expanded;
`;
export const Header = styled.View`
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
`;
export const IconBack = styled.TouchableOpacity`
    position: absolute;
    margin-top: 18px;
    height: 50px;
    width: 50px;
    z-index: 1;
`;
