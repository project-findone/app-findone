import axios from 'axios';

export interface ResponseError {
  status: string;
  message: string;
}

export const api = axios.create({
  baseURL: 'http://192.168.15.58:3333/',
});
