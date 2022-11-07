import styled from 'styled-components/native';

export const Content = styled.View`
    flex: 1;
    border-top-left-radius: 27px;
    border-top-right-radius: 27px;
    margin-top: -20px;
    background-color: #fff;
`;

export const LineTop = styled.View`
    height: 20%;
    width: 100%;
    flex-direction: row;
`;

export const Images = styled.View`
    height: 60%;
    width: 100%;
    margin-top: 8%;
    background-color: #fff;
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
    width: 50px;
    height: 50px;
`;

export const InfoBottom = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.Text`
    font-size: 25px;
    font-weight: bold;
`;

export const Buttons = styled.View`
    flex-direction: row;
    margin-top: 25px;
    justify-content: space-between;
    width: 85%;
    margin-bottom: 40px;
`;

export const Button1 = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border: #00C673 4px solid;
  border-radius: 14px;
  height: 58px;
  width: 47%;
`;

export const TextOption1 = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #00C673;
`;

export const Button2 = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border: #DF7C7C 4px solid;
  border-radius: 14px;
  height: 58px;
  width: 47%;
`;

export const TextOption2 = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #DF7C7C;
`;
