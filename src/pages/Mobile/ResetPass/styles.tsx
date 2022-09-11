import styled from 'styled-components/native';

import { Image } from 'react-native';

export const Logo = styled(Image)`
    width: 32vw;
    max-width: 150px;
    max-height: 150px;
    height: 32vw;
    align-self: center;
`;
export const Title = styled.Text`
    font-size: 30px;
    font-weight: 700;
    margin-top: 50px;
    margin-bottom: 15px;
`;

export const Button = styled.TouchableOpacity`
    alignItems: 'center';
    padding: 9px;
    width: 100%;
    borderRadius: 30px;
    borderColor: #00B9C6;
    borderWidth: 3.5;
    marginTop: 80px;
`;

export const Text = styled.Text`
    color: #00B9C6;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    padding: 4px;
`;
