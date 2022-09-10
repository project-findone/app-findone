import type { PropsWithChildren } from 'react';
import React, { createContext, useContext, useState } from 'react';
import type { IauthContextServices } from './services/IAuthContextServices';

import { AuthContextServices } from './services/AuthContextServices';

type IauthContextData = {
  user: Record<string, unknown>;
  services: IauthContextServices;
};

const AuthContext = createContext<IauthContextData>({} as IauthContextData);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<Record<string, unknown>>({});
  const authContextServices = new AuthContextServices();
  const user = { name: 'test' };
  return (
    <AuthContext.Provider value={{ user: data, services: authContextServices }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IauthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
