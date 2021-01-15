/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  devOptions: {
    open: 'none',
  },

  mount: {
    public: '/',
    src: '/dist',
  },

  packageOptions: {
    knownEntrypoints: ['react/jsx-runtime'],
  },

  plugins: [
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-webpack',
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-babel',
    '@snowpack/plugin-typescript',
  ],
};
