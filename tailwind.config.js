/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
  },
  plugins: [],
}

