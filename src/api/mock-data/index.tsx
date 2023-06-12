import { setupWorker, rest } from 'msw';

import productsFake from './fake_products.json';

export type ProductFake = {
  category: string;
  id: number;
  name: string;
  price: string;
  subcategory: string;
};

export type ProductFilter = Record<ProductFilterKeys, string | number>;
/* {
  minPrice: number;
  maxPrice: number;
} & Pick<ProductFake, 'name' | 'category' | 'subcategory'>;
 */
export type ProductFilterKeys =
  | 'name'
  | 'category'
  | 'subcategory'
  | 'minPrice'
  | 'maxPrice';

const filtersAvailable: ProductFilterKeys[] = [
  'name',
  'category',
  'subcategory',
  'minPrice',
  'maxPrice',
];

const filterProducts = (
  firstRecord: number,
  amountRecords: number,
  filters: Partial<ProductFilter>,
): ProductFake[] => {
  let results: ProductFake[] = productsFake;

  filtersAvailable.forEach((filter) => {
    const currentFilter = filters[filter];
    if (currentFilter) {
      results = results.filter((record) => {
        if (filter === 'name') {
          return record.name
            .toLowerCase()
            .includes((currentFilter as string).toLowerCase());
        }

        if (filter === 'category') {
          return record.category
            .toLowerCase()
            .includes((currentFilter as string).toLowerCase());
        }

        if (filter === 'subcategory') {
          return record.subcategory
            .toLowerCase()
            .includes((currentFilter as string).toLowerCase());
        }

        if (filter === 'minPrice') {
          return Number(record.price) >= (currentFilter as number);
        }

        if (filter === 'maxPrice') {
          return Number(record.price) <= (currentFilter as number);
        }

        return true;
      });
    }
  });

  return results.slice(firstRecord, firstRecord + amountRecords);
};

export const mockDataURL = 'https://iam-fake-data.com';

// 2. Describe network behavior with request handlers.
const worker = setupWorker(
  rest.get(`${mockDataURL}/products`, (req, res, ctx) => {
    const filters: Partial<ProductFilter> = {};

    filtersAvailable.forEach((filter: ProductFilterKeys) => {
      const filterParamValue = req.url.searchParams.get(filter);

      // converte somente numeros stringificados para number
      if (filterParamValue) {
        filters[filter] = Number.isNaN(Number(filterParamValue))
          ? filterParamValue
          : Number(filterParamValue);
      }
    });

    return res(
      ctx.delay(1500),
      ctx.status(202, 'Mocked status'),
      ctx.json(filterProducts(0, 10, filters)),
    );
  }),
);

// const startFakeProductsServer = (pass?: boolean) => pass && worker.start;
const startFakeProductsServer = () => {
  worker.start();
};

// 3. Start request interception by starting the Service Worker.
export { startFakeProductsServer, filterProducts };
