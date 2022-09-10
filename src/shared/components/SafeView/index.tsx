import React, { PropsWithChildren } from 'react';

import { SafeView } from './styles';

export const SafeAreaView: React.FC<PropsWithChildren> = ({ children }) => (
  <SafeView>
    {children}
  </SafeView>
);

export default SafeView;
