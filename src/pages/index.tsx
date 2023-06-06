import { RouteObject } from 'react-router-dom';
import { ProductList } from './ProductList';

const usePageRoutes = () => {
  const pageRoutes: (RouteObject & {
    disabled: boolean;
    label: string;
    path: string;
  })[] = [
    {
      path: '/',
      element: <ProductList />,
      disabled: false,
      label: 'Product List',
    },
  ];

  return { pageRoutes };
};

export { usePageRoutes };
