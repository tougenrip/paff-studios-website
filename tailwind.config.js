/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    backgroundSize:{
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '110%': '110%',
      'heroCover': '150%',
      'lgHeroCover':'100%',
    },
    extend: {},
    fontFamily:{
      'Jura': ['Jura', 'sans-serif'],
      'Inter': ['Inter', 'sans-serif'],
      'Gilroy': ['Gilroy', 'sans-serif']
    },
    backgroundImage:{
      'Hero': "url('img/hero.webp')",
    }
  }
}