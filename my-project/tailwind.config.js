/** @type {import('tailwindcss').Config} */
import scrollbarHide from 'tailwind-scrollbar-hide';
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-bg": "url('/vite.svg')",
      },
      screens: {
        'max-md': { max: '767px' }, // Custom max-width breakpoint
      },
    },
  },
  plugins: [ scrollbarHide, ],
};
