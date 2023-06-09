import { ShoppingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { customCss } from '../../../../utils/stitches';

const iconCentralized = customCss({
  padding: '4px 15px',
  display: 'flex',
  alignItems: 'center',
});

export function ShoppingCartLink(): JSX.Element {
  return (
    <Link to="/carrinho" className={iconCentralized()}>
      <ShoppingOutlined rev={undefined} />
    </Link>
  );
}
