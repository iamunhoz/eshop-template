import { FlagOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import { useState } from 'react';

export function ToggleButtonForShopLanguageDrawer(): JSX.Element {
  const [showSectionsDrawer, setShowSectionsDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowSectionsDrawer((prev) => !prev);
  };
  return (
    <>
      <Button type="text" onClick={toggleDrawer}>
        <FlagOutlined rev={undefined} />
      </Button>
      <Drawer open={showSectionsDrawer} onClose={toggleDrawer} />
    </>
  );
}
