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
      'secondary-default': '#A3A1E2',
      'third-default': '#45A9A7',
      'white': '#ffffff',
      'gray-light-1': '#5F5F5F',
      'gray-light-2': '#5F5F5F',
      'gray-light-3': '#B9B9B9',
      'gray-light-4': '#ffffffeb',
      'gray-light-5': '#ffffff80',
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
