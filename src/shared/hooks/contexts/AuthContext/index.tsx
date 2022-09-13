/* eslint-disable react/jsx-no-constructed-context-values */
import type { PropsWithChildren } from 'react';
import React, {
  createContext, useContext, useState, useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { IauthContextServices } from './services/IAuthContextServices';

import { AuthContextServices } from './services/AuthContextServices';

type IPersonState = {
  token: string;
  user: object;
};

type IAuthContextData = {
  user: Object;
  services: IauthContextServices;
};

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<IPersonState>({} as IPersonState);
  const authContextServices = new AuthContextServices();

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        'Person:token',
        'Person:self']);
      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }
    }
    loadStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{ user: data, services: authContextServices }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
