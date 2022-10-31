import styled from 'styled-components/native';

export const UserImage = styled.Image`
  margin-top: 25%;
  height: 140px;
  aspect-ratio: 1;
  border-radius: 100px;
  border: 6px solid #00b9C6;
`;

export const Name = styled.Text`
  font-size: 35px;
  font-weight: bold;
  margin-top: 20px;
`;

export const Title = styled.Text`
color: #9B9B9B;
font-size: 20px;
font-weight: 400;
margin-top: 8px;
`;

export const Button1 = styled.TouchableOpacity`
  align-items: center;
  padding: 17px;
  border: #00B9C6 3px solid;
  border-radius: 10px;
  margin-top: 35px;
  flex-direction: row;
`;

export const TextEdit = styled.Text`
  color: #00B9C6;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

export const TextExit = styled.Text`
  color: #DF7C7C;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

export const Button2 = styled.TouchableOpacity`
  align-items: center;
  padding: 17px;
  border: #DF7C7C 3px solid;
  border-radius: 10px;
  margin-top: 30px;
  flex-direction: row;
`;
