/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'liteblue': "url('/assets/img/lightblue.jpg')",
      },
    },
  },
  plugins: [],
}
