import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Touchable, Text } from './styles';

export interface ButtonProps extends TouchableOpacityProps {
  insideText: string;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

export const Button: React.FC<ButtonProps> = ({ insideText, ...props }) => (
  <Touchable {...props}>
    <Text>{insideText}</Text>
  </Touchable>
);
