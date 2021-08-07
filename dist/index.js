import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import { StrictMode } from '../_snowpack/pkg/react.js';
import { render } from '../_snowpack/pkg/react-dom.js';
import './tailwind.css.proxy.js';
import { App } from './app.js';
import { jsx as _jsx } from "../_snowpack/pkg/react/jsx-runtime.js";
render( /*#__PURE__*/_jsx(StrictMode, {
  children: /*#__PURE__*/_jsx(App, {})
}), document.querySelector('#app')); // Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
// @ts-ignore

if (undefined /* [snowpack] import.meta.hot */ ) {
  // @ts-ignore
  undefined /* [snowpack] import.meta.hot */ .accept();
}