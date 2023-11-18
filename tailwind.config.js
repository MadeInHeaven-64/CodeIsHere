/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        black: '#001C30',
        color1: '#176B87',
        color2: '#64CCC5',
        color3:'#DAFFFB',
        blue : '',
      },
    },
  },
  plugins: ['flowbite/plugin'],
}

