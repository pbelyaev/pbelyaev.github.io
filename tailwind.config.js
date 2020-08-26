module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.tsx", "./src/index.html"],
  },

  theme: {
    fontFamily: {
      display: ["Arial, Helvetica", "sans-serif"],
      body: ["Arial, Helvetica", "sans-serif"],
    },

    extend: {},
  },

  variants: {},

  plugins: [],

  future: {
    removeDeprecatedGapUtilities: true,
  },
};
