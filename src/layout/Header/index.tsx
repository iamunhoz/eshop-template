/**
 * receita:
 *  desktop: 2 barras
 *    barra 1: brand no meio, botoes à direita: conta, linguagem, carrinho
 *    barra 2: seções da loja
 *  mobile: 1 barra: botao à direita que faz exibir drawer com seções da loja, brand no meio, lupa, carrinho
 *
 *  2 barras extras (mobile e desktop):
 *    barra 1: carrossel contendo textos exibindo as vantagens da loja
 *    barra 2: promoções sazonais
 */
import { Row } from 'antd';
import { customStyled } from '../../utils/stitches';
import {
  ClientAccountPageLink,
  ShopLogobrand,
  ToggleButtonForShopLanguageDrawer,
  ToggleButtonForShopSectionsDrawer,
  ShoppingCartLink,
  ProductSearchbar,
} from './components';

const StyledHeader = customStyled('header', {
  width: '100%',
  padding: 5,

  'div.ant-row': {
    position: 'relative',
  },

  '.desktop-only': {
    display: 'none',

    '@lg': {
      display: 'flex',
    },
  },

  '.header-right-side': {
    display: 'flex',
    paddingTop: 10,

    '@lg': {
      paddingTop: 5,
    },
  },
});

export default function Header(): JSX.Element {
  return (
    <StyledHeader>
      <Row justify="space-between">
        <div className="header-left-side">
          <ToggleButtonForShopSectionsDrawer />
        </div>
        <ShopLogobrand />
        <div className="header-right-side">
          <ProductSearchbar />
          <div className="desktop-only">
            <ClientAccountPageLink />
            <ToggleButtonForShopLanguageDrawer />
          </div>
          <ShoppingCartLink />
        </div>
      </Row>
    </StyledHeader>
  );
}
