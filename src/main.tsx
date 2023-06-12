/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { startFakeProductsServer } from './api/mock-data';
import { globalStyles } from './globalStyles';

globalStyles();
startFakeProductsServer();

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<App />);
