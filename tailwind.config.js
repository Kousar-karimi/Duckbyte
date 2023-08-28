/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index/**/*.{html,js}"],
  theme: {
    fontFamily:{
      Kalameh:['Kalameh']
    },
    extend: {
      colors:{
        icon:"#193f8e",
        lightorange:"#FFDCBE",
        lightgreen:"#DCE8B4",
        brown:"#8B5000",
        darckgreen:"#58633A",
        darckbrown:"#735A42",
        buttongreen:"#161E00",
        gradient:"#D27C04",
        fonthead:"#3B455A"
      },
      screens:{
        'replace':'993px',
        'bettwin':'516px'
      }
    },
  },
  plugins: [],
}