/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ['Fraunces','serif'],
      },
      fontWeight: {
        light: 300,
      },
      // fontFamily: {
      //   qimaky: ['"Qimaky"', 'sans-serif'], // Add your custom font name
      // },
    },
    colors: {
      'white': '#ffffff',
      'charcoal': '#272727',
      'ivory': '#FBF6F2',
      'offPink': '#FFD4F8',
      'offGreen': '#C4ECB0',
    },
  },
  plugins: [],
}

