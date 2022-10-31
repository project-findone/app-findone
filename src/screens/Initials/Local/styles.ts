import styled from 'styled-components/native';

export const View = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  padding: 12%;
  align-items: center;
  background-color: #FFF;
`;

export const Title = styled.Text`
  font-size: 38px;
  font-weight: 700;
  align-self: flex-start;
  margin-bottom: 20px;
`;

export const Description = styled.Text`
  font-size: 18px;
  align-self: flex-start;
`;

export const Label = styled.Text`
  color: #545454;
  font-size: 16px;
  margin: 8px;
`;

export const Mapalogo = styled.Image`
  margin-top: 14%;
  margin-bottom: 70px;
  height: 130px;
  aspect-ratio: 1.13;
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
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background-color: #1CB8C2;
`;

export const TextbtnConceder = styled.Text`
  color: #FFF;
  font-weight: 700;
  margin: 5px;
  font-size: 17px;
  font-stretch: expanded;
`;

export const BtnNaopermitir = styled.TouchableOpacity`
  flex: 1;
  align-self: center;
  justify-content: center;
  top: 20px
`;

export const Textbtn2 = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #aaaaaa;
  text-align: center;
`;
