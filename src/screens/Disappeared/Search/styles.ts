import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const ViewMapa = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #d2d2d2;
    margin-top: 40px;
`;

export const ViewLista = styled.View`
    flex: 1;
    margin-top: 17%;
    background-color: #E2E2E2;
    padding: 15px 8% 0 8%;
`;

export const Text = styled.Text`
    font-size: 26px;
    font-weight: 700;
    color: #FFF;
`;

export const BarUp = styled.View`
    position: absolute;
    height: 17%;
    width: 100%;
    background-color: #FFF;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    align-items: center;
    z-index: 1;
`;

export const Button1 = styled.TouchableOpacity`
  height: 50px;
  width: 45%;
  align-items: center;
  justify-content: center;
  background-color: #1ABFCA;
  border-radius: 100px;
  flex-direction: row;
`;

export const Text2 = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

export const ButtonsArea = styled.View`
    height: 85%;
    width: 88%;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`;

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
    border-radius: 25px;
    border-Color: #0288D1;
    border-Width: 5px;
    flex-direction: row;
    background-color: #fff;
`;

export const ButtonGreen = styled.TouchableOpacity`
    padding: 12px;
    width: 100%;
    margin-top: 45px;
    border-radius: 15px;
    border-Color: #00B7A1;
    border-Width: 5px;
`;

export const TextName = styled.Text`
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
    height: 70px;
    width: 70px;
`;

export const { ButtonLocationContainer } = StyleSheet.create({
  ButtonLocationContainer: {
    position: 'absolute',
    padding: 16,
    bottom: 16,
    right: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: 'white',
  },
});
