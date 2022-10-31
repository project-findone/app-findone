import React from 'react';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';

import { Touchable, Text } from './styles';

export interface ButtonProps extends TouchableOpacityProps {
  isLoading?: boolean;
  insideText: string;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

export const Button: React.FC<ButtonProps> = ({ insideText, isLoading, ...rest }) => (
  <Touchable {...rest}>
    { isLoading ? <ActivityIndicator size={32} />
      : <Text>{insideText}</Text>}
  </Touchable>
);
