/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight:{
        'height':'140%'
      }
    },
    container:{
      center:true,
    },
    fontFamily:{
      'open':["Open Sans", "sans-serif"],
    }
  },
  plugins: [],
}