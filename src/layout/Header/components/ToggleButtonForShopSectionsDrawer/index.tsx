import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Button, Drawer } from 'antd';
import { useState } from 'react';
import { customCss } from '../../../../utils/stitches';

const closeButtonAtRightSide = customCss({
  '.ant-drawer-header-close-only': {
    '.ant-drawer-header-title': {
      flexDirection: 'row-reverse',
    },
  },
});

const styleButton = customCss({
  border: 0,

  '@lg': {
    display: 'none',
  },
});

export function ToggleButtonForShopSectionsDrawer(): JSX.Element {
  const [showSectionsDrawer, setShowSectionsDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowSectionsDrawer((prev) => !prev);
  };
  return (
    <>
      <Button onClick={toggleDrawer} className={styleButton()}>
        <HamburgerMenuIcon />
      </Button>
      <Drawer
        open={showSectionsDrawer}
        onClose={toggleDrawer}
        placement="left"
        className={closeButtonAtRightSide()}
      />
    </>
  );
}
