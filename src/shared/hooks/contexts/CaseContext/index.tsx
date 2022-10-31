/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext, useContext, useCallback, PropsWithChildren, useState,
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

export type ICaseData = {
  disappeared: {
    name: string;
    lastname: string;
    personID: number;
    personTypeID: number;
    age: number;
  }
  case: {
    city: string;
  }
};

type ICaseContextData = {
  services: {
    register: (credentials: TregisterCredentials) => Promise<void>;
    listCases: () => Promise<void>
  };
  casesOfDisappeareds: ICaseData[] | null
};

const CaseContext = createContext<ICaseContextData>({} as ICaseContextData);

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cases, setCases] = useState<ICaseData[] | null>(null);

  const listCases = useCallback(async () => {
    try {
      const disappeareds = await api.get('disappeareds');
      if (disappeareds.data) setCases(disappeareds.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          const { message } = error.response.data as ResponseError;
          showToast({ message, type: 'alert' });
        }
      }
    }
  }, []);

  const register = useCallback(async (credentials: TregisterCredentials) => {
    try {
      const response = await api.post('disappeared', credentials);

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
      services: { register, listCases },
      casesOfDisappeareds: cases,
    }}
    >
      {children}
    </CaseContext.Provider>
  );
};

export function useUser(): ICaseContextData {
  const context = useContext(CaseContext);

  if (!context) {
    throw new Error('useAuth must be used within an CaseProvider');
  }

  return context;
}
