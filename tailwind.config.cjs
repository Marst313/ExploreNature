/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-btn': '#F0FF42',
        secondary: 'rgb(var(--warna-tema)/ <alpha-value>)',
        containerAbout: '#F7FF99',
      },
    },
    fontFamily: {
      Inknut: ['Inknut Antiqua', 'serif'],
      Imk: ['IM Fell DW Pica', 'serif'],
    },
  },
  plugins: [],
};
