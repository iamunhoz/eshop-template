import { Image } from 'antd';
import genericBrandLogo from '../../../../assets/brand-low-resolution-logo-color-on-transparent-background.svg';
import { customCss } from '../../../../utils/stitches';

const selfCentralized = customCss({
  position: 'absolute',
  top: 10,
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 999,
});

export function ShopLogobrand(): JSX.Element {
  return (
    <Image
      src={genericBrandLogo}
      height={30}
      rootClassName={selfCentralized()}
    />
  );
}
