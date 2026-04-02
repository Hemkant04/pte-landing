/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7f9f4',
          100: '#eef4ea',
          200: '#dce8d5',
          300: '#c3d9b7',
          400: '#9fcb98',
          500: '#79ae6f',
          600: '#5a8f52',
          700: '#467140',
          800: '#3a5a36',
          900: '#346739',
        },
        cream: '#f2edc2',
        accent: {
          DEFAULT: '#ffcd75',
          light: '#ffe4a3',
          dark: '#e5b35c',
        },
      },
    },
  },
  plugins: [],
}
