/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        // Personaliza colores de fondo si es necesario
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom right, #6a0dad, #000000, #6a0dad)',
        'custom-gradients': 'linear-gradient(to bottom, #000000, #341847, #592b81)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'lighting-top-left': '0 0 200px rgba(255, 255, 255, 0.2)',
        'lighting-top-right': '0 0 200px rgba(255, 255, 255, 0.3)',
        'lighting-bottom-right': '0 0 200px rgba(255, 255, 255, 0.3)',
      },
      colors: {
        'primary': '#773078',
        'secondary': '#402D42',
        'tertiary': '#3F2759',
        'fourth': '#',
        'fifth': '#'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Establece "Roboto" como fuente sans-serif
      },
      animation: {
        wave: 'wave 1.5s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(40deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-180': '180deg',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        hidden: 'hidden',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.transform-style-3d': {
          transformStyle: 'preserve-3d',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
      });
    }
  ],
};
