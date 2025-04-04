/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/pages/**/*.{js,ts,jsx,tsx}",
    "./src/app/projects/**/*.{js,ts,jsx,tsx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['"League Spartan"', 'sans-serif'],
      },
      fontSize: {
        '128': '128px',
        '96': '96px',
        '64': '64px',
        '40': '40px',
        '36': '36px',
        '24': '24px',
        '20': '20px',
      },
      letterSpacing: {
        'neg': '-0.07em',
      },
      colors: {
        primary: '#2C3E50',
        secondary: '#65558F',
        verde: '#2BAC27',
        purp: '#65558F',
      },
      zIndex:{
        'z': '2',
      },
      fontWeight: {
        'extrabold': '900', 
      },

    },
  },
  plugins: [],
}

