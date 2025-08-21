/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f8',
          100: '#ccf2ed',
          200: '#99e5db',
          300: '#66d8c9',
          400: '#33cbb7',
          500: '#0D5D56',
          600: '#0a4a44',
          700: '#083832',
          800: '#052621',
          900: '#021311',
        },
        accent: {
          50: '#f4f7f6',
          100: '#e3ede8',
          200: '#c7dbd1',
          300: '#abc9ba',
          400: '#8fb7a3',
          500: '#72A98F',
          600: '#5b8773',
          700: '#446557',
          800: '#2d433b',
          900: '#16211e',
        }
      }
    },
  },
  plugins: [],
}
