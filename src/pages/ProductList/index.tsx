import { Button } from 'antd';
import { filterProducts } from '../../api/mock-data';
import { getProducts } from '../../api';

export function ProductList(): JSX.Element {
  const handlefilterProducts = () => {
    const results = filterProducts(0, 10, {
      name: 'Bath',
      minPrice: 100,
      maxPrice: 120,
    });

    console.log('results', results);
  };

  const handlegetProducts = () => {
    getProducts();
  };

  return (
    <div>
      <Button onClick={handlefilterProducts}>fake</Button>
      <Button onClick={handlegetProducts}>fake get</Button>
    </div>
  );
}
