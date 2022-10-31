import React, { PropsWithChildren } from 'react';
import { SafeAreaViewProps } from 'react-native-safe-area-context';

import { SafeView } from './styles';

interface Props extends PropsWithChildren, SafeAreaViewProps {}

export const SafeAreaView: React.FC<Props> = ({ children, ...rest }) => (
  <SafeView {...rest}>
    {children}
  </SafeView>
);

export default SafeView;
