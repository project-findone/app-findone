import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 70%;
    justify-content: center;
    align-items: center;
`;

export const IconArea = styled.View`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
`;

export const LogoGold = styled.Image`
    height: 160px;
    aspect-ratio: 1;
    margin-bottom: 60px;
`;

export const Text = styled.Text`
  width: 80%;
  font-size: 27px;
  text-align: center;
  margin-bottom: 100px;
`;

export const TextBold = styled.Text`
  font-size: 27px;
  font-weight: 700;
`;

export const BtnAbout = styled.TouchableOpacity`
  height: 77px;
  width: 65%;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  border: 5px solid #E2C425;
  flex-direction: row;
`;

export const TextBtnAbout = styled.Text`
  color: #5C5C5C;
  margin: 5px;
  font-size: 28px;
  font-weight: 400;
  font-stretch: expanded;
`;
