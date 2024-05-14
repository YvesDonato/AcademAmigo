/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    zIndex:{
      'background': -100
    },
    backgroundColor: theme =>({
      'lightblue': '#A8D0E6',
      'medium-darkblue':'#374785',
      'darkblue': '#24305E',
      'white': '#FFFFFF',
      'red': '#F76C6C',
      'yellow': '#F8E9A1',
      'black': '#000000'
    }),
    textColor: {
      'lightblue': '#A8D0E6',
      'medium-darkblue':'#374785',
      'darkblue': '#24305E',
      'white': '#FFFFFF',
      'red': '#F76C6C',
      'yellow': '#F8E9A1',
      'black': '#000000'
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
    },
  },
  plugins: [require("tailwindcss-animate")],
}
