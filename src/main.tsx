/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createRoot } from 'react-dom/client';
import { globalCss } from '@stitches/react';
import './index.css';
import { App } from './App';

const globalStyles = globalCss({
  ':root': {
    '--accent-color': 'rgb(255, 123, 0)',
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
globalStyles();

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<App />);
