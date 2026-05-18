import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Logo from './components/logo';
import { ComarkClient } from '@comark/react';
import highlight from '@comark/react/plugins/highlight'
import oneDark from 'shiki/dist/themes/one-dark-pro.mjs'
import md from './index.md?raw';
import './main.css';

const components = { Logo };
const plugins = [
  highlight({ themes: {
    dark: oneDark,
  } }),
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ComarkClient markdown={md} components={components} plugins={plugins} />
  </StrictMode>
);
