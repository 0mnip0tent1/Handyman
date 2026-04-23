import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        jet:    '#0a0a0a',
        darkbg: '#111111',
        cardbg: '#181818',
        lime:   '#3ddc5c',
        lime2:  '#2bb84a',
        silver: '#e8e8e8',
      },
      fontFamily: {
        display:    ['var(--font-bebas)', 'sans-serif'],
        body:       ['var(--font-barlow)', 'sans-serif'],
        condensed:  ['var(--font-barlow-condensed)', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
      },
    },
  },
  plugins: [],
}

export default config
