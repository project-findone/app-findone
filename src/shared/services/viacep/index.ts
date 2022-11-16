/* eslint-disable class-methods-use-this */
import { showToast } from '@shared/components/Toast';
import axios from 'axios';

export const viacepAPI = axios.create({ baseURL: 'https://viacep.com.br/ws/' });

type IAdressByCEPR = {
  cep: string,
  logradouro: string,
  complemento: string,
  bairro: string,
  localidade: string,
  uf: string,
  ibge: string,
  gia: string,
  ddd: string,
  siafi: string
  erro?: boolean
};

export class ViaCepService {
  async searchByCEP(cep: string): Promise<IAdressByCEPR | null> {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
      return response.data as IAdressByCEPR;
    } catch (err) {
      showToast({ message: 'Houve um erro ao consultar o CEP', type: 'alert' });
    }
    return null;
  }
}
