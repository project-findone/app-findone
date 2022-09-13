/* eslint-disable class-methods-use-this */
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '@shared/services/api';
import type {
  IauthContextServices, TsignInCredentials, TSignInResponse, TsignUpCredentials,
} from './IAuthContextServices';

export class AuthContextServices implements IauthContextServices {
  async signIn(credentials: TsignInCredentials): Promise<TSignInResponse> {
    const response = await api.post('sessions', credentials);

    const { token, user } = response.data;

    AsyncStorage.multiSet([['Person:token', token], ['Person:self', JSON.stringify(user)]]);

    return { token, user: JSON.parse(user) };
  }

  async signUp(credentials: TsignUpCredentials): Promise<void> {
    await api.post('/users', credentials);
  }
}
