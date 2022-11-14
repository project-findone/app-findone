import styled from 'styled-components/native';

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
