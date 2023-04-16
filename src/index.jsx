import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';

const rootElem = document.querySelector('#root');
const root = createRoot(rootElem);

root.render(<App />);
