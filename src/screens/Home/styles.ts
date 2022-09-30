import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const map = styled.View`
    width: 100%;
    height: 100%;
`;

export const CalloutContainer = styled.View`
    width: 160;
    height: 100%;
    padding: 16;
    background-Color: "rgba(255, 255, 255, 0.8)";
    border-Radius: 16;
    justify-Content: center;
`;

export const CalloutText = styled.Text`
    color: "#0089a5";
    text-decoration-line: underline;
    font-Size: 14;
`;

export const CalloutSmallText = styled.Text`
    color: #005555;
    font-size: 10;
`;

export const Footer = styled.View`
    position: absolute;
    left: 24;
    right: 24;
    bottom: 32;
    background-color: #fff;
    border-radius: 20;
    height: 56;
    padding-left: 24;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    elevation: 3;
`;

export const FooterText = styled.Text`
    width: 200;
    color: #8fa7b3;
`;
