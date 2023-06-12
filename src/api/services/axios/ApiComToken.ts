import axios from 'axios';
import { baseURL } from './ip';
import { LocalStorage } from '../crud/LocalStorage.ts';

const ApiComToken = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});

ApiComToken.interceptors.request.use((request) => {
  if (!request.headers) return request;
  request.headers.Authorization = `Bearer ${LocalStorage.accessToken}`;
  return request;
});

export default ApiComToken;
