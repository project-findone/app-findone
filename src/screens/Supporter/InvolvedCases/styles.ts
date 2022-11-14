import styled from 'styled-components/native';

interface Props {
  type: number;
}

export const Header = styled.View`
    background-color: #FFF;
    flex-direction: row;
    width: 100%;
    height: 100px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    z-index: 1;
    padding: 0 10% 0 10%;
    justify-content: space-between;
    align-items: center;
`;

export const Content = styled.View`
    flex: 1;
    margin-top: -20px;
    background-color: #f2f2f2;
`;

export const Title = styled.Text`
    font-size: 33px;
    font-weight: bold;
`;

export const Container = styled.View`
    padding: 0px 30px 0px 30px;
    height: 100%;
    width: 100%;
`;

export const PersonCardContainer = styled.View<Props>`
    width: 100%;
    height: 75px;
    margin-top: 20px;
    border-radius: 25px;
    border-Color: ${({ type, theme }) => (type === 2 ? theme.COLORS.SECONDARY : theme.COLORS.TERCIARY)};
    border-Width: 5px;
    flex-direction: row;
    align-items: center;
    background-color: #fff;
`;

export const Buttons = styled.View`
    width: 120px;
    position: absolute;
    height: 115%;
    right: 0;
    margin-right: -4px;
    flex-direction: row;
`;

export const ButtonInformation = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
    border-radius: 25px;
    border-Color: #A8A8A8;
    border-Width: 5px;
    align-items: center;
    padding-right: 42%;
`;

export const TextInformation = styled.Text`
    color: #A8A8A8;
    font-size: 16px;
    font-weight: bold;
`;

export const ButtonChat = styled.TouchableOpacity<Props>`
    width: 55%;
    height: 100%;
    position: absolute;
    right: 0;
    border-radius: 25px;
    border-Color: ${({ type, theme }) => (type === 2 ? theme.COLORS.SECONDARY : theme.COLORS.TERCIARY)};
    border-Width: 5px;
    justify-content: center;
    align-items: center;
`;

export const TextChat = styled.Text<Props>`
    color: ${({ type, theme }) => (type === 2 ? theme.COLORS.SECONDARY : theme.COLORS.TERCIARY)};
    font-size: 16px;
    font-weight: bold;
`;

export const Text = styled.Text`
    color: #000;
    font-size: 16px;
    font-weight: bold;
`;

export const ImagePerfil = styled.Image`
    height: 50px;
    width: 50px;
    margin-left: 4%;
    margin-right: 3%;
`;

export const NotFoundContainer = styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const NotFoundText = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD};
    font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
    color: ${({ theme }) => theme.COLORS.CAPTION_600};
`;
