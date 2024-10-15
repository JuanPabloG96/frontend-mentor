/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.jsx",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        'soft-cyan': '#8ce2db',
        'strong-cyan': '#26c2ad',
        'light-grayish-red': '#feece7',
        'light-red': '#ff8c66',
        'pale-blue': '#c4f0ff',
        'white': '#ffffff',
        'very-pale-blue': '#f7faff',
        'light-grayish-blue-slider': '#eaeefb',
        'light-grayish-blue-toggle': '#d7e0f9',
        'grayish-blue': '#7d889e',
        'dark-desaturated-blue': '#293356',
      },
      backgroundImage: {
        'background': "url('/images/bg-pattern.svg')",
        'circles': "url('/images/pattern-circles.svg')",
      },
    },
  },
  plugins: [],
}

