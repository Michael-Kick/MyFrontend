/** @type {import('tailwindcss').Config} */
import fluid,{extract, screens, fontSize} from "fluid-tailwind";
module.exports = {
  content: {
    files: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    extract,
  },
  theme: {
    extend: {
      fontSize: {
        base: '20px', // Default font size
        lg: '25px',
        xl: '30px',
      },
      fontFamily: {
        jetbrains: ['JetBrains Mono', 'monospace'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        danger: 'var(--color-danger)',
        background: 'var(--color-background)',
        text: 'var(--color-text-base)',
        contrast: 'var(--color-contrast)',
        contrastDark: 'var(--color-contrastDark)',
      }
    },
    screens,
    fontSize,
  },
  plugins: [fluid],
}

