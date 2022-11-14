import styled from 'styled-components/native';
import { Theme } from '@shared/theme';
import { StyleSheet } from 'react-native';

export const { description } = StyleSheet.create({
  description:
    {
      backgroundColor: Theme.COLORS.CAPTION_500,
    },
});

export const Header = styled.View`
    width: 100%;
    height: 11%;
    flex-direction: column-reverse;
`;

export const Title = styled.Text`
    font-size: 35px;
    font-weight: 800;
`;

export const Container = styled.View`
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    width: 100%;
    height: 85px;
    background-color: ${({ theme }) => theme.COLORS.CAPTION_400};
`;

export const PersonButton = styled.TouchableOpacity`
    position: absolute;
    width: 100%;
    height: 85px;
    border-radius: 25px;
    background-color: #FFF;
    border: #0288D1 5px solid;
    z-index: 10;
    padding: 0 10% 0 10%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const ViewPrincipal = styled.View`
    width: 100%;
    margin-bottom: 40px;
`;

export const ChatTitle = styled.Text`
    font-size: 17px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.CAPTION_650};
`;

export const ButtonChat = styled.TouchableOpacity`
    width: 100%;
    height: 45px;
    background-color: ${({ theme }) => theme.COLORS.CAPTION_400};
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding-bottom: 3px;
    flex-direction: row;
`;

export const ImagePerson = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 100px;
`;

export const ViewInfo = styled.View`
    padding-left: 4%;
    width: 90%;
    height: 65%;
    flex-direction: column;
`;

export const TextName = styled.Text`
    font-size: 19px;
    font-weight: 700;
`;
export const TextDescription = styled.Text`
    font-size: 14px;
    font-weight: 400;
`;

export const ViewItem = styled.TouchableOpacity`
    width: 100%;
    height: 80px;
    background-color: ${({ theme }) => theme.COLORS.CAPTION_400};
    padding: 0 12% 0 12%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const ImageSupp = styled.Image`
    height: 52px;
    width: 52px;
    border-radius: 100px;
    border: 3px #E2C425 solid;
    margin-right: 1%;
`;
