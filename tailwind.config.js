/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        minecraft: {
          green: '#44633F',
          brown: '#7A5C58',
          dirt: '#866043',
          stone: '#9A9A9A',
        },
      },
    },
  },
  plugins: [],
}