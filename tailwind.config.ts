import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        base: '#FFFCF2',
        surface: '#FFFFFF',
        accent: '#FFE566',
        accent2: '#A8FF78',
        ink: '#000000',
        subtle: '#666666',
        wa: '#25D366',
        error: '#FF4D4D',
      },
      boxShadow: {
        neo: '4px 4px 0px 0px #000000',
        'neo-lg': '6px 6px 0px 0px #000000',
        'neo-sm': '2px 2px 0px 0px #000000',
        'neo-pressed': '1px 1px 0px 0px #000000',
      },
      borderRadius: {
        DEFAULT: '0px',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-4px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(4px)' },
        }
      },
      animation: {
        shake: 'shake 0.4s ease-in-out',
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
