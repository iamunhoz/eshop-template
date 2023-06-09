import { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { customStyled } from '../../../../utils/stitches';
import { ProductSearchbarModalBody } from './ProductSearchbarModalBody';

const StyledBar = customStyled('div', {
  display: 'flex',

  '@lg': {
    display: 'none',
  },
});

export function ProductSearchbar(): JSX.Element {
  const [showProductSearchModal, setShowProductSearchModal] = useState(false);

  const toggleModal = () => {
    setShowProductSearchModal((prev) => !prev);
  };

  return (
    <StyledBar>
      <Button type="text" onClick={toggleModal}>
        <SearchOutlined rev={undefined} />
      </Button>
      <Modal
        open={showProductSearchModal}
        onCancel={toggleModal}
        footer={null}
        width="99vw"
      >
        <ProductSearchbarModalBody />
      </Modal>
    </StyledBar>
  );
}
