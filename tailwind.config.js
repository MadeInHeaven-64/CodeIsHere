/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'login.html', 'about.html'],
  theme: {
    extend: {
      colors: {
        black: '#001C30',
        color1: '#176B87',
        color2: '#64CCC5',
        color3:'#DAFFFB',
      },
    },
  },
  plugins: ['flowbite/plugin'],
}

