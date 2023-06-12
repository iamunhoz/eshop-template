import { useAtom } from 'jotai';
import { Input, Row } from 'antd';
import { productListFiltersAtom } from '../../../../state';
import { filtersAvailable } from '../../../../api/mock-data';

export function FiltersBar(): JSX.Element {
  const [filters, setFilters] = useAtom(productListFiltersAtom);

  return (
    <Row>
      {filtersAvailable.map((filt) => (
        <div key={filt}>
          <p>{filt}</p>
          <Input
            value={filters[filt] || 'nao filtrado'}
            onChange={(evt) => {
              setFilters((prev) => ({
                ...prev,
                [filt]: evt.target.value,
              }));
            }}
          />
        </div>
      ))}
    </Row>
  );
}
