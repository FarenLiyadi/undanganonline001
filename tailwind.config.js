/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: '1200px'
      }
    },
    extend: {
      fontFamily: {
        cormorant: ['Cormorant', 'serif'],
        gardenia: ['Gardenia Summer', 'serif'],
        meath: ['MeathFLF', 'serif'],
        ballet: ['Ballet', 'script'],
        kulim: ['"Kulim Park"', 'serif'],
        barlow: ['Barlow Condensed', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        arial: ['Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};
