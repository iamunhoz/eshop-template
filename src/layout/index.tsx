import { Outlet } from 'react-router-dom';
import { styled } from '@stitches/react';
import { useAtomValue } from 'jotai';
import Footer from './Footer';
import Header from './Header';
import { themeAtom } from '../state';

const StyledLayout = styled('div', {
  variants: {
    /* border: {
      with: {
        '*': {
          border: '1px solid #EEE',
        },
      },
      without: {
        '*': {
          border: 0,
        },
      },
    }, */
    theme: {
      light: {
        '*': {
          backgroundColor: '#FFF',
          color: '#000',
        },
      },
      dark: {
        '*': {
          backgroundColor: '#000',
          color: '#FFF',
        },
      },
    },
  },
  width: '100vw',
  minHeight: '100vh',
});

export default function Layout(): JSX.Element {
  const theme = useAtomValue(themeAtom);

  return (
    <StyledLayout theme={theme}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </StyledLayout>
  );
}
