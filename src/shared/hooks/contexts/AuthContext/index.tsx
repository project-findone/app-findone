import React, {createContext, PropsWithChildren, useContext, useState} from 'react';
import { IAuthContextServices } from './services/IAuthContextServices';

import {AuthContextServices} from './services/AuthContextServices';

interface IAuthContextData {
    user: Object;
    services: IAuthContextServices
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [data, setData] = useState<Object>({})
    const authContextServices = new AuthContextServices()
    const user = {name: 'test'}
    return (
        <AuthContext.Provider value={{user: data, services : authContextServices}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): IAuthContextData{
     const context = useContext(AuthContext);

     if(!context){
        throw new Error('useAuth must be used within an AuthProvider');
     }

     return context;
}







