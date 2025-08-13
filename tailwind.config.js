/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-red': '#c0392b',
        'sage-green': '#2ecc71',
        'serenity-blue': '#5d9cec',
        'soft-gold': '#f1c40f',
        'charcoal-grey': '#34495e',
        'body-light-grey': '#ecf0f1',
        'white': '#ffffff',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
