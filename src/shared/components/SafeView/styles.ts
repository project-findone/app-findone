import styled, {DefaultTheme} from "styled-components/native";
import { Platform, StatusBar} from 'react-native'

interface SafeViewProps extends DefaultTheme{
    AppDimensions: {width: number, height: number};
}

export const SafeView = styled.SafeAreaView<SafeViewProps>`
    flex: 1;
    padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 2}px;
    padding-right: 20%;
    padding-left: 20%;
    position: relative;
    background-color: #fff;
    justify-content: center;

    @media (max-width: 600px) {
        padding: 10%;
        background-color: aliceblue;
    }
`