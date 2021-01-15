import { StrictMode } from 'react';
import { render } from 'react-dom';

import './tailwind.css';
import { App } from './App';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector('#app')
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
// @ts-ignore
if (import.meta.hot) {
  // @ts-ignore
  import.meta.hot.accept();
}
