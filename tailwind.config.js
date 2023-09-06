/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        margin: '50px 0 50px',
        padding: '50px',
        borderRadius: '50px',
        backgroundColor:'pink',
        background: '#e0e0e0',
        boxShadow: 'inset 5px 5px 10px #bebebe; inset -5px -5px 10px #ffffff',
      },
      bgClr: {
        backgroundColor: "pink",
      }
    },
  },
  plugins: [],
}