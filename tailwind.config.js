/** @type {import('tailwindcss').Config} */
import fluid,{extract, screens, fontSize} from "fluid-tailwind";
module.exports = {
  darkMode: 'class',
  content: {
    files: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    extract,
  },
  theme: {
    extend: {
      fontSize: {
        base: '18px', // Optimized for 1920x1080 displays (reduced from 20px)
        lg: '22px',   // Proportionally reduced from 25px
        xl: '26px',   // Proportionally reduced from 30px
      },
      fontFamily: {
        jetbrains: ['JetBrains Mono', 'monospace'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: 'var(--color-primary)',
        primaryHover: 'var(--color-primary-hover)',
        onPrimary: 'var(--color-on-primary)',
        secondary: 'var(--color-secondary)',
        danger: 'var(--color-danger)',
        background: 'var(--color-background)',
        text: 'var(--color-text-base)',
        border: 'var(--color-border)',
        contrast: 'var(--color-contrast)',
        contrastDark: 'var(--color-contrastDark)',
      }
    },
    screens,
    fontSize,
  },
  plugins: [fluid],
}
