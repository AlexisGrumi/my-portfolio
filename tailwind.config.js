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
        'custom-gradient': 'linear-gradient(to bottom, #111827, #3D578D)',
      },
      colors: {
        'primary': '#111827',
        'secondary': '#2C66C3',
        'tertiary': '#2CB67D',
        'fourth': '#2C66C3',
        'fifth': '#1E293B'
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
