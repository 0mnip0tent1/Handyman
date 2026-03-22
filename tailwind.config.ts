import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sand:   '#F5EFE0',
        forest: '#2C3E2D',
        sienna: '#C4622D',
        cream:  '#FDFAF4',
        bark:   '#3D2B1F',
        muted:  '#8A7968',
        edge:   '#DDD5C0',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body:    ['var(--font-dm-sans)', 'sans-serif'],
        mono:    ['var(--font-dm-mono)', 'monospace'],
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        scrollPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scaleY(1)' },
          '50%':      { opacity: '0.8', transform: 'scaleY(1.1)' },
        },
      },
      animation: {
        'scroll-pulse': 'scrollPulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
