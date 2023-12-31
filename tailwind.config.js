/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily:{
      PoppinsBlackItalic:'PoppinsBlackItalic',
      PoppinsBold: 'PoppinsBold',
      PoppinsItalic: 'PoppinsRegularItalic'
    },
    extend: {
      colors:{
        White: 'hsl(0, 0%, 100%)',
        OffWhite: 'hsl(0, 0%, 94%)',
        LightGrey: 'hsl(0, 0%, 86%)',
        SmokeyGrey: 'hsl(0, 1%, 44%)',
        OffBlack: 'hsl(0, 0%, 8%)',
        Purple: 'hsl(259, 100%, 65%)',
        LightRed: 'hsl(0, 100%, 67%'
      }
    },
  },
  plugins: [],
}
