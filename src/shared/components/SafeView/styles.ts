import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const SafeView = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
    background-color: ${(props) => props.theme.COLORS.BG};
`;
