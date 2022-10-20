/* eslint-disable react/jsx-no-constructed-context-values */
import type { PropsWithChildren } from 'react';
import React, {
  createContext, useContext, useCallback,
} from 'react';
import { AxiosError } from 'axios';

import { api, ResponseError } from '@shared/services/api';
import { showToast } from '@shared/components/Toast';

type TregisterCredentials = {
  name: string;
  lastname: string;
  age: string;
  gender: string;
  cpf: string;
  cep: string;
  state: string;
  city: string;
  others: string;
  street: string;
  description: string;
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
      const response = await api.post('disappeared', credentials);

      if (response) showToast({ message: 'Cadastro realizado com sucesso!', type: 'sucess' });
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error);
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
