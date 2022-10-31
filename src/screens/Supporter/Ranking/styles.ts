import styled from 'styled-components/native';

export const ViewTitle = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 32px;
    font-weight: bold;
    color: #FFF;
    margin-top: 5px;
`;

export const ViewTop = styled.View`
    align-items: center;
`;

export const ViewPodium = styled.View`
    width: 100%;
    height: 310px;
    flex-direction: row;
    align-items: flex-end;
`;

export const First = styled.View`
    flex: 1;
    height: 88%;
    justify-content: space-between;
    align-items: center;
`;

export const Second = styled.View`
    flex: 1;
    height: 70%;
    justify-content: space-between;
    align-items: center;
`;

export const Third = styled.View`
    flex: 1;
    height: 60%;
    justify-content: space-between;
    align-items: center;
`;

export const ImageName = styled.View`
    width: 100%;
    height: 60px;
    flex-direction: row;
    align-items: flex-end;
    background-color: #b1dbe9;
`;

export const Position = styled.View`
    width: 70%;
    height: 110px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    flex-direction: row;
    align-items: flex-end;
    background-color: #EEEEEE;
`;

export const ViewList = styled.View`
    flex: 1;
    background-color: white;
    border-radius: 20px;
`;

export const Filters = styled.View`
    position: absolute;
    bottom: 0;
    background-color: white;
    width: 113%;
    height: 100px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    flex-direction: row;
    padding: 25px;
    justify-content: space-between;
`;

export const State = styled.TouchableOpacity`
    height: 100%;
    width: 40%;
    border-radius: 100px;
    border: 4px #1ABFCA solid;
    justify-content: space-between;
    padding: 0 5px 0 22px;
    flex-direction: row;
    align-items: center;
`;

export const City = styled.TouchableOpacity`
    height: 100%;
    width: 55%;
    border-radius: 100px;
    border: 4px #1ABFCA solid;
    justify-content: center;
    justify-content: space-between;
    padding: 0 5px 0 22px;
    flex-direction: row;
    align-items: center;
`;

export const Label = styled.Text`
    font-size: 15px;
    font-weight: 700;
    color: rgba(0,0,0,0.5);
`;
