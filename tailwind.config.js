/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Comfortaa: ["Comfortaa", "cursive"],
       },
       colors: {
        'bubble-gum' :  '#00DFBF',
        'steel' : '#395C65',
        'bubble-gum-300' : '#C7F8F1',
        'bubble-gum-700' : '#009D85',
      }
    },
  },
  plugins: [],
}