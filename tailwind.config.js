module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.tsx', './src/index.html'],
  },

  theme: {
    fontFamily: {
      display: ['Arial, Helvetica', 'sans-serif'],
      body: ['Arial, Helvetica', 'sans-serif'],
    },

    extend: {
      gridTemplateColumns: {
        'global-container': '300px 1fr',
      },
    },
  },

  variants: {},

  plugins: [],

  future: {
    removeDeprecatedGapUtilities: true,
  },
};
