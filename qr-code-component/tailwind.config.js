/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        'light-gray': 'hsl(212, 45%, 89%)',
        'grayish-blue': 'hsl(220, 15%, 55%)',
        'dark-blue': 'hsl(218, 44%, 22%)'
      },
      fontFamily: {
        outfit: ['Outfit', 'san-serif']
      },
      height: {
        inherit: 'inherit'
      }
    }
  },
  plugins: []
}
