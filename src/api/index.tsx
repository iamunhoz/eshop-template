/* eslint-disable no-console */
import { ProductFake, ProductFilter } from './mock-data';
import { buildUrl } from './services/axios/ip';
import { SemToken } from './services/crud';

export const getProducts = async (filters: ProductFilter) => {
  const queryUrl = buildUrl('products', filters);

  try {
    const response = await SemToken.get(queryUrl);
    if (response.data) return response.data as ProductFake[];
  } catch (e) {
    console.error(e);
  }

  return [];
};
