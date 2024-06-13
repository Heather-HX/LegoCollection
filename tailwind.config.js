/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./views/**/*.ejs`],
  daisyui: {
    themes: ['retro'],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}