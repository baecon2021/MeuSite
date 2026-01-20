/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#F2F2F0', // Vintage White / Paper
        surface: '#FFFFFF',
        primary: '#0A0A0A', // Tinta Preta
        secondary: '#525252', // Cinza Neutro
        accent: '#A3A3A3', // Prata
        line: '#E5E5E5', // Linhas sutis
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'grain': "url('https://grainy-gradients.vercel.app/noise.svg')",
      }
    }
  },
  plugins: [],
}