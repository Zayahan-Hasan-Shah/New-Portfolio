/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2.25rem',
        lg: '3rem',
        xl: '3rem',
        '2xl': '3rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Syne', 'sans-serif'],
      },
      colors: {
        base: 'rgb(var(--bx-base) / <alpha-value>)',
        'base-tint': 'rgb(var(--bx-base-tint) / <alpha-value>)',
        'base-shade': 'rgb(var(--bx-base-shade) / <alpha-value>)',
        accent: 'rgb(var(--bx-accent) / <alpha-value>)',
        secondary: 'rgb(var(--bx-secondary) / <alpha-value>)',
        'secondary-rgba': 'rgb(var(--bx-secondary) / 0.3)',
        stroke: {
          controls: 'rgb(var(--bx-stroke-controls) / <alpha-value>)',
          elements: 'rgb(var(--bx-stroke-elements) / <alpha-value>)',
        },
        text: {
          bright: 'rgb(var(--bx-text-bright) / <alpha-value>)',
          medium: 'rgb(var(--bx-text-medium) / <alpha-value>)',
          muted: 'rgb(var(--bx-text-muted) / <alpha-value>)',
          accent: 'rgb(var(--bx-text-accent) / <alpha-value>)',
          secondary: 'rgb(var(--bx-text-secondary) / <alpha-value>)',
          placeholder: 'rgb(var(--bx-text-placeholder) / <alpha-value>)',
        },
        gradient: {
          one: 'rgb(var(--bx-gradient-1) / <alpha-value>)',
          two: 'rgb(var(--bx-gradient-2) / <alpha-value>)',
          three: 'rgb(var(--bx-gradient-3) / <alpha-value>)',
        },
      },
      borderRadius: {
        'bx-s': '1.5rem',
        'bx-m': '2.2rem',
        'bx-l': '3rem',
        'bx-xl': '3.6rem',
      },
      boxShadow: {
        'glass-soft': '0 0 55px rgba(74, 38, 188, 0.25)',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, rgb(var(--bx-accent) / 1) 0%, rgb(var(--bx-secondary) / 1) 100%)',
      },
    },
  },
  plugins: [],
}
