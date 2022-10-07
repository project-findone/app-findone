/* eslint-disable react/jsx-no-constructed-context-values */
import type { PropsWithChildren } from 'react';
import React, {
  createContext, useContext, useState, useEffect, useCallback,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosError } from 'axios';

import { api, ResponseError } from '@shared/services/api';
import { showToast } from '@shared/components/Toast';

type TSignInCredentials = {
  email: string;
  password: string;
};

type TSignUpCredentials = {
  name: string;
  lastname: string;
  email: string;
  password: string;
  personCPF: string;
  phoneNumber: string;
  personCEP: string;
  birthDate: string;
  gender: string;
};

type IPersonState = {
  token: string;
  userResponse: object;
};

type IAuthContextData = {
  user: Object | any;
  services: {
    signIn: (credentials: TSignInCredentials) => Promise<void>;
    signUp: (credentials: TSignUpCredentials) => Promise<void>;
  };
};

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<IPersonState>({} as IPersonState);

  const signIn = useCallback(async (credentials: TSignInCredentials): Promise<void> => {
    try {
      const response = await api.post('sessions', credentials);

      const { token, userResponse } = response.data;

      await AsyncStorage.multiSet([['Person:token', token], ['Person:self', JSON.stringify(userResponse)]]);

      setData({ token, userResponse });
    } catch (error: any) {
      if (error instanceof AxiosError) {
        if (error.response) {
          const { message } = error.response.data as ResponseError;
          showToast({ message, type: 'alert' });
        } else {
          showToast({ message: 'Houve um erro ao realizar o login', type: 'alert' });
        }
      }
    }
  }, []);

  const signUp = useCallback(async (credentials: TSignUpCredentials) => {
    try {
      const response = await api.post('users', credentials);

      if (response) showToast({ message: 'Cadastro realizado com sucesso!', type: 'sucess' });
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error);
        if (error.response) {
          const { message } = error.response.data as ResponseError;
          showToast({ message, type: 'alert' });
        }
      }
      showToast({ message: 'Erro desconhecido', type: 'alert' });
    }
  }, []);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        'Person:token',
        'Person:self']);
      if (token[1] && user[1]) {
        setData({ token: token[1], userResponse: JSON.parse(user[1]) });
      }
    }
    loadStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{
      user: {
        token: data.token,
        data: data.userResponse,
      },
      services: { signIn, signUp },
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
