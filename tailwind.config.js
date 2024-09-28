/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
import { config } from 'dotenv';

// Load Environment Variables
config();

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        primary_dark: "var(--color-primary-dark)",
        secondary: "var(--color-secondary)",
        secondary_dark: "var(--color-secondary-dark)"
      }
    },
  },
  plugins: [
    plugin(function ({addBase}) {
      addBase({
        ":root": {
          // getting variables from .env
          "--color-primary": process.env.VITE_COLOR_PRIMARY,
          "--color-primary-dark": process.env.VITE_COLOR_PRIMARY_DARK,
          "--color-secondary": process.env.VITE_COLOR_SECONDARY,
          "--color-secondary-dark": process.env.VITE_COLOR_SECONDARY_DARK,
        }
      })
    })
  ],
}

