/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-title': 'linear-gradient(92deg, #F05423 11.5%, #A83CCE 46.87%, #3D62B0 85.41%)',
      },
      screens: {
        'ph': {'max': '431px'},
      },
    },
  },
  plugins: [],
}

