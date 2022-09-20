/* eslint-disable react/jsx-no-constructed-context-values */
import type { PropsWithChildren } from 'react';
import React, {
  createContext, useContext, useState, useEffect, useCallback,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosError } from 'axios';

import { api, ResponseError } from '@shared/services/api';

type TSignInCredentials = {
  email: string;
  password: string;
};

type IPersonState = {
  token: string;
  user: object;
};

type IAuthContextData = {
  user: Object;
  services: {
    signIn: (credentials: TSignInCredentials) => Promise<void>;
  };
};

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<IPersonState>({} as IPersonState);

  const signIn = useCallback(async (credentials: TSignInCredentials): Promise<void> => {
    try {
      const response = await api.post('sessions', credentials);

      const { token, user } = response.data;

      await AsyncStorage.multiSet([['Person:token', token], ['Person:self', JSON.stringify(user)]]);

      setData({ token, user });
    } catch (error: any) {
      if (error instanceof AxiosError) {
        if (error.response) {
          const err = error.response.data as ResponseError;
          console.log(err.message);
        }
      }
    }
  }, []);

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
    <AuthContext.Provider value={{
      user: {
        token: data.token,
        data: data.user,
      },
      services: { signIn },
    }}
    >
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
