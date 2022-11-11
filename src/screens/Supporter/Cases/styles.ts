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
    width: 100%;
    height: 80px;
    background-color: #FFF;
`;

export const PersonButton = styled.TouchableOpacity`
    position: absolute;
    width: 100%;
    height: 80px;
    border-radius: 20px;
    background-color: #FFF;
    border: #0288D1 5px solid;
    z-index: 10;
`;

export const CaseItem = styled.View`
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
    height: 55px;
    background-color: ${({ theme }) => theme.COLORS.CAPTION_400};
    align-items: center;
    justify-content: flex-end;
    margin-top: -16px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding-bottom: 10px;
`;
