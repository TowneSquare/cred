/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary-light': '#FBEA8D',
      'primary-default': '#F5E27D',
      'primary-dark': '#EDD86B',
      'white': '#ffffff',
      'gray-light-1': '#5F5F5F',
      'gray-light-2': '#5F5F5F',
      'gray-light-3': '#B9B9B9',
      'black': '#000000',
      'error': '#FF4471'
    },
    extend: {},
    fontFamily: {
      Inter: ['Inter', 'sans-serif']
    },
  },
  plugins: [],
}
