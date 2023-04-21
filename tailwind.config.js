/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
  './src/**/*.{js,jsx,ts,tsx}' //esto también es una forma de englobar subdirectorios
  ],
  theme: {
  extend: {
    backgroundColor:{
      capa:"rgba(0, 0, 0, 0.8)"
    }
  }
  },
  variants: {},
  plugins: []
 }