/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  devOptions: {
    open: 'none',
  },

  mount: {
    public: '/',
    src: '/dist',
  },

  plugins: [
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'yarn build:tailwind',
        watch: 'yarn build:tailwind:dev',
      },
    ],
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-babel',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
  ],
};
