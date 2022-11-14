import styled from 'styled-components/native';

export const Header = styled.View`
    flex-direction: row;
    width: 100%;
    margin-top: 1%;
`;

export const Container = styled.View`
    padding-left: 30px;
    padding-right: 30px;
    height: 100%;
    width: 100%;
    margin-top: 20px;
`;

export const Title = styled.Text`
    font-size: 37px;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 3%;
`;

export const ViewButton = styled.View`
    width: 100%;
`;

export const Button = styled.TouchableOpacity <{ color: string }>`
    width: 100%;
    height: 100px;
    margin-top: 40px;
    border-radius: 20px;
    border-Color: ${(props) => props.color};
    border-Width: 7px;
    flex-direction: row;
    align-items: center;
    padding-left: 15px;
`;

export const TextButton = styled.Text <{ color: string }>`
    color: ${(props) => props.color};;
    font-weight: 700;
    font-size: 28px;
    margin-left: 15px;
`;
