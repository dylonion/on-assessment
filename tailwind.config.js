/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.js",
  ],
  theme: {
    container: {
      screens: {
        '1200px': '1170px',
        '992px': '970px',
        '768px': '750px'
      },
      center: true
    },
    extend: {
      colors: {
        'pz-red': "#c3161c"
      },
    },
  },
  plugins: [],
}

