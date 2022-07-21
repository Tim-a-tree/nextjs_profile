/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: "2rem",
    },
    fontSize:{
      'title': '4rem',
    },
    extend: {
      height: {
        '1': '1em',
      },
      margin: {
        '0.5': '0.5em',
      },
    }
  },
  plugins: [],
}
