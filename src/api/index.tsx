/* eslint-disable no-console */
import { SemToken } from './services/crud';

export const getProducts = async () => {
  const response = await SemToken.get('products?name=bath&maxPrice=222');

  console.clear();
  console.log('response getProducts', response);
};
