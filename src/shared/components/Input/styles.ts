import styled, {DefaultTheme} from 'styled-components/native';

interface ContainerProps extends DefaultTheme {
    marginTop: number;
}

export const Container = styled.View<ContainerProps>`
    width: 100%;
    height: 60px;
    margin-top: ${props => props.marginTop ? props.marginTop : 0}px;
`;

export const TextInput = styled.TextInput`
    height: 80%;
    border-width: 2px;
    border-color: #A7A7A7;
    border-radius: 6px;
    padding: 15px;
    justify-content: center;
`;

export const Label = styled.View`
    background-color: #FFF;
    align-self: flex-start;
    padding: 6px;
    margin-bottom: -9px;
    margin-left: 18px;
    z-index: 1;
`;
