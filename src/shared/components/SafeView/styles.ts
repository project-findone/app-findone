import styled, { DefaultTheme } from 'styled-components/native';
import { Platform, StatusBar, Dimensions } from 'react-native';

interface SafeViewProps extends DefaultTheme {
  AppDimensions: { width: number, height: number };
}

export const SafeView = styled.SafeAreaView<SafeViewProps>`
    flex: 1;
    padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 2}px;
    padding-right: 10vw;
    padding-left: ${Dimensions.get('screen').width >= 900 ? 20 : 10}vw;
    position: relative;
    background-color: ${Dimensions.get('screen').width >= 900 ? '#bebe' : '#fff'};
    justify-content: center;

    @media (min-width: 800px) {
        padding: 10%;
        background-color: red;
    }
`;
