import { Image } from 'antd';
import genericBrandLogo from '../../../../assets/brand-low-resolution-logo-color-on-transparent-background.svg';
import { customCss } from '../../../../utils/stitches';

const selfCentralized = customCss({
  justifySelf: 'center',
});

export function ShopLogobrand(): JSX.Element {
  return (
    <Image src={genericBrandLogo} height={30} className={selfCentralized()} />
  );
}
