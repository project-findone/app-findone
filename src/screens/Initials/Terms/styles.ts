import styled from 'styled-components/native';

export const ScrollView = styled.ScrollView`
    padding: 0 10% 0 10%;
    height: 12px;
`;

export const Container = styled.View`
    flex: 1;
`;

export const TopGroup = styled.View`
    padding: 8% 10% 0 10%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
`;

export const Title = styled.Text`
    font-size: 38px;
    align-self: center;
    font-weight: bold;
`;

export const Text = styled.Text`
    margin: 5px 0 45px 0;
    font-size: 20px;
    align-self: center;
    text-align: justify;
`;

export const BottomArea = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
`;

export const InfoArea = styled.View`
    position: absolute;
    bottom: 0;
    align-self: center;
    margin-bottom: 30px;
`;

export const BottomText = styled.Text`
    font-size: 25px;
    color: rgba(0, 0, 0, 0.25);
    font-weight: 500;
`;

export const ButtonRight = styled.TouchableOpacity`
    align-items: center;
    align-self: center;
    padding: 11px;
    width: 100%;
    margin: -35px 0 175px 0;
    border-radius: 30px;
    background-color: #06B6C0;
`;

export const TextButtonRight = styled.Text`
    color: #FFF;
    font-weight: 600;
    margin: 3px;
    font-size: 20px;
    font-stretch: expanded;
`;
