// apps/mobile/tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // <--- Yeh line add karna zaroori hai!
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
