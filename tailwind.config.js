/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#1F4D2C',
        secondary: '#B8860B',
        accent: '#9FB800',
        yellow: '#FFE600',
        brown: '#8B4513',
        orange: '#C85A19',
        gold: '#E89B0C',
      },
    },
  },
  plugins: [],
}
