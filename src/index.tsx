import { StrictMode } from 'react';
import { render } from 'react-dom';

import { App } from './App';

import './tailwind.css';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector('#app')
);
