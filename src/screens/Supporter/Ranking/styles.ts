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
    height: 80%;
    justify-content: space-between;
    align-items: center;
`;

export const Second = styled.View`
    flex: 1;
    height: 78%;
    justify-content: space-between;
    align-items: center;
`;

export const Third = styled.View`
    flex: 1;
    height: 78%;
    justify-content: space-between;
    align-items: center;
`;

export const ImageName = styled.View`
    width: 100%;
    align-items: center;
`;

export const ImagePerson = styled.Image`
    height: 60px;
    aspect-ratio: 1;
    border-radius: 100px;
    border: 3px #E2C425 solid;
`;

export const TitleWhite = styled.Text`
    text-align: center;
    font-size: 13px;
    color: #FFF;
    font-weight: bold;
    margin-top: 9px;
`;

export const Position = styled.View`
    width: 70%;
    height: 110px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    flex-direction: row;
    align-items: flex-end;
    background-color: #f4f4f4;
    align-items: center;
    justify-items: center;
`;

export const ViewList = styled.View`
    width: 100%;
    height: 39%;
    background-color: white;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
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

export const Item = styled.View`
    width: 100%;
    height: 100px;
    flex-direction: row;
    align-items: center;
`;

export const NumberItem = styled.Text`
    font-size: 27px;
    font-weight: 900;
    color: #6E6E6E;
    margin: 0 10px 0 25px;
`;

export const DivTitles = styled.View`
margin-left: 15px;
    width: 54%;
    height: 80%;
    justify-content: center;
`;

export const Name = styled.Text`
    font-size: 17px;
    font-weight: 900;
`;

export const Local = styled.Text`
    font-size: 14px;
    font-weight: 500;
`;

export const Points = styled.Text`
    font-size: 15px;
    font-weight: 900;
    color: #7E7E7E;
`;

export const NumberPosition = styled.Text <{ color: string }>`
    font-size: 68px;
    font-weight: 900;
    color: ${(props) => props.color};
    width: 100%;
    text-align: center;
`;
