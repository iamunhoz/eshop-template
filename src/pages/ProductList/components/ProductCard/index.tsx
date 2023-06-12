import { ProductFake } from '../../../../api/mock-data';
import { customStyled } from '../../../../utils/stitches';

const StyledCardContainer = customStyled('div', {
  display: 'flex',
  flexDirection: 'column',
});

type ProductCardProps = {
  product: ProductFake;
};

export function ProductCard(props: ProductCardProps): JSX.Element {
  const { product } = props;
  return (
    <StyledCardContainer>
      <p>{product.name}</p>
      <p>{product.category}</p>
      <p>{product.subcategory}</p>
      <p>R$ {product.price}</p>
    </StyledCardContainer>
  );
}
