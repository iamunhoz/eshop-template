import { Link } from 'react-router-dom';
import { customCss } from '../../../../utils/stitches';

const iconCentralized = customCss({
  padding: '4px 15px',
  display: 'flex',
  alignItems: 'center',
});

export function ClientAccountPageLink(): JSX.Element {
  return (
    <Link to="/account" className={iconCentralized()}>
      Account
    </Link>
  );
}
