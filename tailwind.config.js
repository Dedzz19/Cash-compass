/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ]
,
  theme: {
    extend: {
      colors:{
        'primary':'#D7E3E5',
        'secondary':'#1C393F'
      }
    },
  },
  plugins: [],
}

