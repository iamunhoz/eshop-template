import { Button, Input } from 'antd';
import { customStyled } from '../../../../utils/stitches';

const StyledModalBody = customStyled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '80vh',
  overflowY: 'auto',
  paddingTop: 25,

  // enquanto cards forem mocados:
  button: {
    width: '150px',
    height: '150px',
  },
});

export function ProductSearchbarModalBody(): JSX.Element {
  return (
    <StyledModalBody>
      <Input />
      {/* cada numero representa um card de produto */}
      <div className="products-container">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((numero) => (
          <Button key={numero}>{numero}</Button>
        ))}
      </div>
    </StyledModalBody>
  );
}
