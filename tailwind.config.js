module.exports = {
  purge: {
    content: ['./src/**/*.tsx', './public/index.html'],
  },

  theme: {
    fontFamily: {
      display: ['Arial, Helvetica', 'sans-serif'],
      body: ['Arial, Helvetica', 'sans-serif'],
    },
  },

  variants: {},

  plugins: [],

  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
