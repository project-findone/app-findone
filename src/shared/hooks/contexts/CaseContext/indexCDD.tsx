import type { PropsWithChildren } from 'react';
import React, {
  createContext, useContext, useCallback,
} from 'react';
import { AxiosError } from 'axios';

import { api, ResponseError } from '@shared/services/api';
import { showToast } from '@shared/components/Toast';

type TchangeCredentials = {
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

type IChangeCaontextData = {
  services: {
    change: (credentials: TchangeCredentials) => Promise<void>;
  };
};

const CaseContext = createContext<IChangeCaontextData>({} as IChangeCaontextData);
const change = useCallback(async (credentials: TchangeCredentials) => {
  try {
    const response = await api.put('losts', credentials);
    if (response) showToast({ message: 'Dados alterados com sucesso!', type: 'sucess' });
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
      services: { change },
    }}
    >
      {children}
    </CaseContext.Provider>
   );
 };

export function useUser(): IChangeCaontextData {
  const context = useContext(CaseContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
