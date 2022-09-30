import styled from 'styled-components/native';

export const View = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #d2d2d2;
    margin-top: 40px;
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

export const Switch = styled.View`
  height: 50px;
  width: 48%;
  align-items: center;
  justify-content: space-between;
  background-color: #E9EDF0;
  border-radius: 100px;
  flex-direction: row;
  padding: 1.7%;
`;

export const Selected = styled.View`
    height: 100%;
    width: 50%;
    background-color: #FFF;
    justify-content: center;
    border-radius: 100px;
`;

export const OptionSelected = styled.Text`
  color: #1ABFCA;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;

export const Unselected = styled.View`
    height: 100%;
    width: 50%;
    justify-content: center;
`;

export const Option = styled.Text`
  color: #494949;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;
