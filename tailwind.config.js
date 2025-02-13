/** @type {import('tailwindcss').Config} */
import fluid,{extract, screens, fontSize} from "fluid-tailwind";
module.exports = {
  content: {
    files: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    extract,
  },
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['JetBrains Mono', 'monospace'],
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

