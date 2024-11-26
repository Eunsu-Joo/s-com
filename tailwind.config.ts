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
      fontFamily: {
        sans: ['var(--font-chirp-regular)'],
      },
      colors: {
        background: 'rgb(var(--background-rgb))',
        foreground: 'rgb(var(--foreground-rgb))',
        foreground_hover: 'rgb(var(--foreground-hover))',
        primary: 'rgb(var(--primary))',
        primary_glow: 'rgb(var(--primary-glow-rgb))',
        primary_light: 'rgb(var(--primary-light-rgb))',
        input_border: 'rgb(var(--input-border))',
        input_text: 'rgb(var(--c-input-text))',
        gray_light: 'rgba(var(--gray-light-rgba))',
        gray_glow: 'rgb(var(--gray-glow-rgb))',
        gray: 'rgb(var(--gray-rgb))',
        gray_hover: 'rgb(var(--gray-hover-rgb))',
        searchbar: 'rgb(var(--searchbar))',
        like: '#f91880',
        retweet: 'rgb(0,186,124)',
        modal_background: 'rgba(var(--modal-background-rgba))',
        // title_end: 'rgb(var(--tile-end-rgb))',
        // title_border: 'var(--title-border)',
        // card: 'rgb(var(--card-rgb))',
        // card_border: 'rgb(var(--card-border-rgb))',
      },
      borderRadius: {
        DEFAULT: '20px',
      },
      borderColor: {
        DEFAULT: 'rgb(var(--gray-glow-rgb))',
      },
    },
  },
  plugins: [],
}
export default config
