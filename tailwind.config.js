import colors from 'tailwindcss/colors'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "mainText": ["WorksSans"],
    },
    extend: {
      colors: {
        ...colors,
        mainColor: "#C61F1F",
        secondaryColor: "#A1A1A1",
        secondaryColor2: "#808080",
        mutedColor: "#ffffff",
        rarelyColor: "#1D1D1D80", 
        mainBgColor: '#0f172a'
      },
      container: {
        center: true,
        padding: '0 20px',
        screens: {
          sm: '550px',
          md: '700px',
          lg: '950px',
          xl: '1300px',
          '2xl': '1450px',
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
}
