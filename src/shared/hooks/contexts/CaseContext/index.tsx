/* eslint-disable react/jsx-no-constructed-context-values */
import type { PropsWithChildren } from 'react';
import React, {
  createContext, useContext, useCallback,
} from 'react';
import { AxiosError } from 'axios';

import { api, ResponseError } from '@shared/services/api';
import { showToast } from '@shared/components/Toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type TregisterCredentials = {
  disappeared: {
    name: string;
    lastname: string;
    age: number;
    birthDate: Date;
    personCPF: string;
    gender: string;
    personCEP: string;
    state: string;
    city: string;
    personKinship: string;
    description: string;
  },
  case: {
    state: string;
    city: string,
    district: string,
    street: string,
    description: string,
    latitude: string,
    longitude: string
  },
  characteristics: number[],
  passCheck: boolean,
  skin?: string,
  haircolor?: string,
  eye?: string,
  hair?: string,
};

type ICaseContextData = {
  services: {
    register: (credentials: TregisterCredentials) => Promise<void>;
  };
};

const CaseContext = createContext<ICaseContextData>({} as ICaseContextData);

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const register = useCallback(async (credentials: TregisterCredentials) => {
    try {
      const token = await AsyncStorage.getItem('Person:token');

      const response = await api.post('disappeared', credentials, { headers: { authorization: `Bearer ${token}` } });

      if (response) showToast({ message: 'Cadastro realizado com sucesso!', type: 'sucess' });
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          const { message } = error.response.data as ResponseError;
          showToast({ message, type: 'alert' });
        }
      }
    }
  }, []);

  return (
    <CaseContext.Provider value={{
      services: { register },
    }}
    >
      {children}
    </CaseContext.Provider>
  );
};

export function useUser(): ICaseContextData {
  const context = useContext(CaseContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
