import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [   
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",],
  theme: {
    extend: {
      colors :{
        logoColor : '#6d0333',
        connectColor:"#6d0333"
      }
    },
  },
  plugins: [
    daisyui ,
    ],
    daisyui :{
      darkTheme: false,
    },
}

