/* eslint-disable class-methods-use-this */
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
};

export class ViaCepService {
  async searchByCEP(cep: string): Promise<IAdressByCEPR> {
    if (cep.length !== 8) console.log('The cep must be at least 8 digits');
    console.log(cep);
    console.log(viacepAPI);
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    console.log(response);
    return response as IAdressByCEPR;
  }
}
