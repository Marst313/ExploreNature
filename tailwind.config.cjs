/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-btn': '#F0FF42',
      },
    },
    fontFamily: { Inknut: ['Inknut Antiqua', 'serif'], Imk: ['IM Fell DW Pica', 'serif'] },
  },
  plugins: [],
};
