/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/app/pages/**/*.{js,ts,jsx,tsx}",
    "./src/app/projects/**/*.{js,ts,jsx,tsx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['"League Spartan"', 'sans-serif'],  //NEED TO ADD DARK THEME
        roboto: ['"Roboto Flex"', 'sans-serif'],
      },
      fontSize: {
        '128': '128px',
        '96': '96px',
        '80': '80px',
        '64': '64px',
        '56': '56px',
        '48': '48px',
        '40': '40px',
        '36': '36px',
        '32': '32px',
        '24': '24px',
        '20': '20px',
        '16': '16px',
        '14': '14px',
        '12':'12px',
      },
      letterSpacing: {
        'neg': '-0.07em',
      },
      colors: {
        primary: '#2C3E50',
        primaryD: '#E5E7EB',
        secondary: '#65558F',
        verde: '#2BAC27',
        lightVerde: '#77DD77',
        purp: '#65558F',
        containerLight: '#F7F2FA',
        containerDark: '#2B2930',
        lavender: '#CDB4DB',
        black: '#1F1F1F',
        vibPurp: '#A3A4F0',
        royal: '#007AFF',
        lightRoyal: '#5CC1FF',


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

