import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 17% 8% 12% 8%;
  align-items: center;
`;

export const TopContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 30px;
`;

export const LogoGold = styled.Image`
    height: 130px;
    aspect-ratio: 1;
`;

export const Title = styled.Text`
  width: 103%;
  font-size: 23px;
  font-weight: 700;
  margin-bottom: 50px;
  text-align: center;
`;

export const List = styled.View`
  height: 300px;
  width: 90%;
  align-self: center;
`;

export const Item = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const ItemText = styled.Text <{ color: string }>`
  margin-top: 3px;
  font-size: 25px;
  font-weight: bold;
  color: ${(props) => props.color};
  margin-left: 20px;
`;

export const DivButtons = styled.View`
  position: absolute;
  bottom: 50px;
  height: 115px;
  width: 100%;
  align-items: center;
`;

export const BtnConceder = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 52%;
  width: 90%;
  border-radius: 30px;
  background-color: #00B9C6;
`;

export const TextbtnConceder = styled.Text`
  color: #FFF;
  font-weight: 700;
  margin: 5px;
  font-size: 23px;
  font-stretch: expanded;
`;

export const BtnNaopermitir = styled.TouchableOpacity`
  flex: 1;
  align-self: center;
  justify-content: center;
  top: 15px;
`;

export const Textbtn2 = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  color: #BEBEBE;
  text-align: center;
`;
