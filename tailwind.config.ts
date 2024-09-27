import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
      },
      keyframes: {
        'back-rotating': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' },
        },
        rotating: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
            'box-shadow': '0 0 0 0 var(--shadow)',
          },
          '50%': {
            opacity: '.8',
            transform: 'scale(1.01)',
            'box-shadow': '0 0 4px 10px var(--shadow)',
          },
        },
      },
      animation: {
        'back-rotating': 'back-rotating 20s linear infinite',
        rotating: 'rotating 20s linear infinite',
        pulse: 'pulse 1s ease-in-out infinite',
      },
      boxShadow: {
        custom: '0 0 2px 5px var(--shadow)',
      },
    },
  },
} satisfies Config;

export default config;
