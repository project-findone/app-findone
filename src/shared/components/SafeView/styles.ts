import styled from 'styled-components/native';

export const SafeView = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    padding-top: ${({ theme: { STATUS_BAR } }) => STATUS_BAR.HEIGHT};
    background-color: ${(props) => props.theme.COLORS.BG};
`;
