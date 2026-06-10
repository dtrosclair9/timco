import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F0F0F',
          light: '#1F1F1F',
          dark: '#050505',
        },
        accent: {
          DEFAULT: '#E5391E',
          light: '#F1633F',
          dark: '#B82613',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-oswald)', 'Impact', 'sans-serif'],
      },
      letterSpacing: {
        'mega': '0.18em',
      },
    },
  },
  plugins: [],
}

export default config
