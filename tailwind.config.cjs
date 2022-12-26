/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      mildscreen: {'max': '600px'},
      midscreen: {'max': '768px'},
      minscreen: {'max': '908px'}
    }
  },
  plugins: [],
}


