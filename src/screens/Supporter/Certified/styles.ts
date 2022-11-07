import styled from 'styled-components/native';

export const Content = styled.View`
    flex: 1;
    border-top-left-radius: 27px;
    border-top-right-radius: 27px;
    margin-top: -20px;
    background-color: #fff;
    padding: 8%;
`;

export const LineTop = styled.View`
    height: 20%;
    width: 100%;
    flex-direction: row;
`;

export const Images = styled.View`
    height: 50%;
    width: 100%;
    margin-top: 8%;
    flex-direction: row;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 35px;
    font-weight: bold;
    color: #FFF;
    margin-left: 14%;
`;

export const ImageView = styled.View`
    flex: 3;
    align-items: center;
    justify-content: center;
`;

export const ImagePerson = styled.Image`
    width: 75%;
    aspect-ratio: 1;
    border-radius: 20px;
`;

export const Findone = styled.Image`
    width: 140px;
    height: 120px;
    margin-right: 3%;
`;

export const Inpat = styled.Image`
    width: 80px;
    height: 110px;
    margin-left: 12%;
`;

export const Text = styled.Text`
    font-size: 23px;
    font-weight: bold;
`;

export const TextSide = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #929292;
`;

export const TextPoints = styled.Text`
    font-size: 19px;
    font-weight: bold;
    color: #000;
`;

export const DivPoints = styled.View`
    width: 100%;
    margin-top: 13%;
    height: 120px;
`;

export const SideNumbers = styled.View`
    width: 100%;
    height: 37px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Bar = styled.View`
    width: 100%;
    height: 43px;
`;

export const GreyBar = styled.View`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #D9D9D9;
    border-radius: 40px;
`;

export const ColoredBar = styled.View`
    width: 70%;
    height: 100%;
    position: absolute;
    background-color: #00B9C6;
    border-radius: 40px;
`;
export const Points = styled.View`
    margin-top: 3%;
    width: 100%;
    height: 30px;
    align-items: flex-end;
    padding-right: 20%;
`;

export const BtnConceder = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 14%;
  border-radius: 30px;
  background-color: #949494;
`;

export const TextbtnConceder = styled.Text`
  color: #FFF;
  font-weight: 500;
  font-size: 18px;
  font-stretch: expanded;
`;
