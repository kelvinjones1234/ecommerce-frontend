/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '320px',
        'md': '481px',
        // main
        'lg': '750px',
        // main
        'xl': '990px', 
        '2xl': '1201px',
      },
      spacing: {
        'section-pt': 'calc(var(--section-padding-top) * 0.75)',
        'section-pb': 'calc(var(--section-padding-bottom) * 0.75)',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInSlow: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUpFade: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-slow': 'fadeInSlow 1s ease-out',
        'slide-up-fade': 'slideUpFade 1s ease-out',
      }
    },
    
  },
  plugins: [],
}