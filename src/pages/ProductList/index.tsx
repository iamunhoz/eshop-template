import { useQuery } from '@tanstack/react-query';
import { Button } from 'antd';
import { useAtomValue } from 'jotai';
import { getProducts } from '../../api';
import { ProductCard } from './components/ProductCard';
import { customStyled } from '../../utils/stitches';
import { FiltersBar } from './components';
import { productListFiltersAtom } from '../../state';
import { ProductFilter } from '../../api/mock-data';

const StyledProductListContainer = customStyled('div', {
  display: 'flex',
});

export function ProductList(): JSX.Element {
  const filters = useAtomValue(productListFiltersAtom);

  const productsQuery = useQuery({
    queryKey: ['products', filters],
    queryFn: (queryData) =>
      // console.log('queryfn obj', obj);
      getProducts(queryData.queryKey[1] as ProductFilter),
  });
  return (
    <div>
      <Button
        onClick={() => {
          // eslint-disable-next-line no-console
          console.log('filters', filters);
        }}
      >
        log filters
      </Button>
      <FiltersBar />
      <StyledProductListContainer>
        {productsQuery.isLoading && <div>Loading</div>}
        {productsQuery.isError && <div>Error</div>}

        {productsQuery.data &&
          productsQuery.data.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </StyledProductListContainer>
    </div>
  );
}
