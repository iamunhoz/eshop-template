import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  ':root': {
    '--accent-color': 'rgb(255, 123, 0)',
  },
  body: {
    fontSmooth: 'always',
  },

  '*, *:after, *:before': {
    fontFamily: 'Poppins, sans-serif !important',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    textDecoration: 'none',
  },
  '.dark-mode': {
    backgroundColor: '#000',
    color: '#fff',
  },
});

document.body.classList.add('dark-mode');
