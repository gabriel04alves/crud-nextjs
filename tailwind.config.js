/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  content: [],
  darkMode: false,
  theme: {
    extend: {},
    colors: { 
      primary: '#114b5f',
      second: '#caf1ff',
      fundo: '#eee',
      red: 'red',
    } 
  },
  plugins: [],
}
