import styled, { DefaultTheme } from 'styled-components/native';

interface SafeViewProps extends DefaultTheme {
  AppDimensions: { width: number, height: number };
}

export const SafeView = styled.SafeAreaView<SafeViewProps>`
    flex: 1;
    padding-top: 30px;
    padding-right: 10vw;
    padding-left: 10vw;
    position: relative;
    background-color: #fff;
`;
