import axios from 'axios';

export interface ResponseError {
  status: string;
  message: string;
}

export const api = axios.create({
<<<<<<< HEAD
  baseURL: 'http://192.168.0.118:3333/',
=======
  baseURL: 'http://192.168.15.58:3333/',
>>>>>>> ae1e232f69cb2ab582714a66c2492feec1eddb2f
});
