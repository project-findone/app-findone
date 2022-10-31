import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 17% 10% 12% 10%;
  align-items: center;
`;

export const TopContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
`;

export const LogoGold = styled.Image`
    height: 130px;
    aspect-ratio: 1;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const Description = styled.Text`
  font-size: 18px;
  text-align: center;
  margin-bottom: 40px;
`;

export const List = styled.View`
  height: 250px;
  width: 100%;
`;

export const Item = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const ItemText = styled.Text <{ color: string }>`
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
