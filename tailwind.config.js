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
      primary: {
        100: '#CBEBF6',
        200: '#62C4E4',
        300: '#40B6DD',
        400: '#1C7C9C',
        500: '#186E8B',
        default: '#114b5f',
        second: '#caf1ff'
      },
      fundo: '#eee',
      fundob: '#e1e1e1',
      red: 'red',
      delete: '#FF0000',
      verde: {
        500: '#22C55E',
      },
    } 
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
