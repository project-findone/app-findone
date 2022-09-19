/* eslint-disable class-methods-use-this */
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '@shared/services/api';
import type {
  IauthContextServices, TsignInCredentials, TsignUpCredentials,
} from './IAuthContextServices';

export class AuthContextServices implements IauthContextServices {
  async signIn(credentials: TsignInCredentials): Promise<void> {
    try {
      const response = await api.post('sessions', credentials);

      console.log(response);

      const { token, userResponse } = response.data.user;

      console.log(response);
      console.log(userResponse);

      await AsyncStorage.multiSet([['Person:token', token], ['Person:self', JSON.stringify(userResponse)]]);
    } catch (error: any) {
      console.error(error.response);
    }
  }

  async signUp(credentials: TsignUpCredentials): Promise<void> {
    await api.post('users', credentials);
  }
}
