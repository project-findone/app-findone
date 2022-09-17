import styled, { DefaultTheme } from 'styled-components/native';

interface SafeViewProps extends DefaultTheme {
  AppDimensions: { width: number, height: number };
}

export const SafeView = styled.SafeAreaView<SafeViewProps>`
    flex: 1;
    padding-top: 15px;
    padding-left: 10%;
    padding-right: 10%;
    position: relative;
    background-color: #fff;
`;
