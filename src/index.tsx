import * as React from 'react';
import { render } from 'react-dom';

import './tailwind.css';
import { App } from './App';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#app')
);
