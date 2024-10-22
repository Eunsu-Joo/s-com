import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background-start-rgb))',
        background_end: 'rgb(var(--background-end-rgb))',
        foreground: 'rgb(var(--foreground-rgb))',
        primary: 'rgb(var(--primary-rgb))',
        primary_glow: 'rgb(var(--primary-glow-rgb))',
        primary_light: 'rgb(var(--primary-light-rgb))',
        border: 'rgb(var(--border))',
        secondary_glow: 'var(--secondary-glow)',
        title_start: 'rgb(var(--tile-start-rgb))',
        title_end: 'rgb(var(--tile-end-rgb))',
        title_border: 'var(--title-border)',
        card: 'rgb(var(--card-rgb))',
        card_border: 'rgb(var(--card-border-rgb))',
      },
      borderRadius: {
        DEFAULT: '20px',
      },
    },
  },
  plugins: [],
}
export default config
