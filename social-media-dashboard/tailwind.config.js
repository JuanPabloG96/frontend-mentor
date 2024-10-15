/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        lime: 'hsl(163, 72%, 41%)',
        red: 'hsl(356, 69%, 56%)',

        // Media colors
        facebook: 'hsl(208, 92%, 53%)',
        twitter: 'hsl(203, 89%, 53%)',
        youtube: 'hsl(348, 97%, 39%)',

        // Dark Mode Switch
        toggleLight: 'hsl(230, 22%, 74%)',

        // Neutral - Dark Theme
        veryDarkBlue: 'hsl(230, 17%, 14%)',
        veryDarkBluePattern: 'hsl(232, 19%, 15%)',
        darkDesaturatedBlue: 'hsl(228, 28%, 20%)',
        darkDesaturatedBlueHover: 'hsl(228, 28%, 25%)',
        desaturatedBlueText: 'hsl(228, 34%, 66%)',
        whiteText: 'hsl(0, 0%, 100%)',
        // Neutral - Light Theme
        whiteBg: 'hsl(0, 0%, 100%)',
        veryPaleBlue: 'hsl(225, 100%, 98%)',
        lightGrayishBlue: 'hsl(227, 47%, 96%)',
        darkGrayishBlueText: 'hsl(228, 12%, 44%)',
        veryDarkBlueText: 'hsl(230, 17%, 14%)'
      },
      backgroundImage: {
        instagram: 'linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
        toggleDark: 'linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
      },
      fontFamily: {
        inter: ['Inter', 'san-serif']
      }
    },
  },
  safelist: [
    'bg-facebook', 'bg-twitter',
    'bg-instagram', 'bg-youtube',
    'text-lime', 'text-red',
    'font-Inter'
  ],
  plugins: [],
};

