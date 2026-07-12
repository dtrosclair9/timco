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
          // Deep, saturated brand red for dark backgrounds. Nearly identical to
          // the brand DEFAULT (#E5391E) but nudged just bright enough to clear
          // AA small-text 4.5:1 on #0F0F0F with margin (4.73:1) instead of the
          // razor-thin 4.505:1 of the DEFAULT. Restores brand punch vs the old
          // washed-out coral (#F1633F); also passes 3:1 for large text + icons.
          light: '#EA3D20',
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
