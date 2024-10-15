/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile': "url(/assets/images/background-pattern-mobile.svg)",
        'desktop': "url(/assets/images/background-pattern-desktop.svg)",
      },
      colors: {
        'white': 'hsl(0, 0%, 100%)',
        'light-pink': 'hsl(275, 100%, 97%)',
        'pink': 'hsl(280, 91%, 56%)',
        'grayish-purple': 'hsl(292, 16%, 49%)',
        'dark-purple': 'hsl(292, 42%, 14%)',
      },
      fontFamily:{
        'work-sans': ['Work Sans', 'sans-serif']
      }
    },
    plugins: [],
  }
}
