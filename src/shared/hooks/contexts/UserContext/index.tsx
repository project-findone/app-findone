/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext, useContext, useCallback, PropsWithChildren, useState,
} from 'react';
import { AxiosError } from 'axios';

import { api, ResponseError } from '@shared/services/api';
import { showToast } from '@shared/components/Toast';
import { requestTimeout } from '@shared/utils/requestTimeout';
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
    longitude: string;
  },

  characteristics: number[],
  passCheck: boolean,
  skin?: string,
  haircolor?: string,
  eye?: string,
  hair?: string,
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
    address: string
    city: string;
    latitude?: string
    longitude?: string
  }
};

export type ICaseInvolvedData = {
  session: {
    sessionChatID: string;
  },
  disappeared: {
    personTypeID: number;
    name: string;
    lastname: string;
    personID: string;
    personImage: string;
  }
};

export type ICaseFilter = {
  disappeared: {
    name?: string
    lastname?: string
    description?: string
    personCPF?: string
    gender?: string
    age?: number
  }
  case: {
    city?: string
    state?: string
  }
  characteristics?: number[]
};

type IUserContextData = {
  services: {
    register: (credentials: TregisterCredentials) => Promise<void>;
    listCases: () => Promise<void>
    listCasesWithFilters: (credentials: ICaseFilter) => Promise<void>
    listInvolvedCases: () => Promise<void>
    joinCase: (caseID: string) => Promise<object>
  };
  casesOfDisappeareds: ICaseData[] | null
  casesOfDisappearedsF: ICaseData[] | null
  setCasesOfDisappearedsF: any
  casesInvolved: ICaseInvolvedData[] | null
};

const UserContext = createContext<IUserContextData>({} as IUserContextData);

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cases, setCases] = useState<ICaseData[] | null>(null);
  const [casesFiltred, setCasesFiltred] = useState<ICaseData[] | null>(null);
  const [casesInvolved, setCasesInvolved] = useState<ICaseInvolvedData[] | null>(null);

  const listInvolvedCases = useCallback(async () => {
    try {
      const disappeareds = await requestTimeout(api.post('cases/supporter'), 5000);
      if (disappeareds.data) setCasesInvolved(disappeareds.data);
      console.log(disappeareds.data);
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        if (error.response) {
          const { status } = error.response;
          const { message } = error.response.data as ResponseError;
          if (status !== 404) showToast({ message, type: 'alert' });
        }
      }
    }
  }, []);

  const joinCase = useCallback(async (caseID: string) => {
    try {
      const message = await requestTimeout(api.post(`users/join/${caseID}`), 5000);
      return message.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          const { status } = error.response;
          const { message } = error.response.data as ResponseError;
          if (status !== 404) showToast({ message, type: 'alert' });
        }
      }
    }
    return null;
  }, []);

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

  const listCasesWithFilters = useCallback(async (credentials: ICaseFilter) => {
    try {
      const { disappeared, case: caseDis } = credentials;
      if (disappeared.gender?.length === 0) disappeared.gender = undefined;
      if (caseDis.state?.length === 0) caseDis.state = undefined;
      const disappeareds = await requestTimeout(api.post('disappeared/find', { disappeared, caseDis }), 5000);
      if (disappeareds.data) setCasesFiltred(disappeareds.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          const { message } = error.response.data as ResponseError;
          showToast({ message, type: 'alert' });
        }
      }
    }
  }, []);

  const listCases = useCallback(async () => {
    try {
      const disappeareds = await requestTimeout(api.post('disappeared/find'), 5000);
      if (disappeareds.data) setCases(disappeareds.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          const { status } = error.response;
          const { message } = error.response.data as ResponseError;
          if (status !== 404) showToast({ message, type: 'alert' });
        }
      }
    }
  }, []);

  return (
    <UserContext.Provider value={{
      services: {
        register, listCases, listCasesWithFilters, listInvolvedCases, joinCase,
      },
      casesOfDisappeareds: cases,
      casesOfDisappearedsF: casesFiltred,
      setCasesOfDisappearedsF: setCasesFiltred,
      casesInvolved,
    }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUser(): IUserContextData {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useAuth must be used within an CaseProvider');
  }

  return context;
}
