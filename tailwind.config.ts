import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep Navy - Primary brand color
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
          950: '#0f172a', // Primary deep navy
        },
        // Burgundy accent palette
        burgundy: {
          50: '#fdf2f2',
          100: '#fde8e8',
          200: '#fbd5d5',
          300: '#f8b4b4',
          400: '#f87171',
          500: '#991b1b',
          600: '#7f1d1d', // Primary burgundy accent
          700: '#6b1c1c',
          800: '#5a1a1a',
          900: '#4a1818',
          950: '#300a0a',
        },
        // Gold accent palette
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#d4af37', // Primary gold
          600: '#b8972f',
          700: '#9a7b28',
          800: '#7c6320',
          900: '#5e4a18',
          950: '#3d2e0f',
        },
        // Warm neutrals / cream
        cream: {
          50: '#fdfcfb',
          100: '#faf8f5',
          200: '#f5f1eb',
          300: '#ebe5db',
          400: '#d4c9b8',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to right bottom, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.85))',
        'hero-gradient': 'linear-gradient(135deg, rgba(15, 23, 42, 0.97) 0%, rgba(15, 23, 42, 0.85) 50%, rgba(127, 29, 29, 0.4) 100%)',
        'section-gradient': 'linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(15, 23, 42, 0.95) 100%)',
        'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #f5d280 50%, #d4af37 100%)',
        'texture-paper': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'ticker': 'ticker 30s linear infinite',
        'ticker-slow': 'ticker 45s linear infinite',
        'gold-shimmer': 'goldShimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'reveal': 'reveal 1s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        goldShimmer: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)' },
          '50%': { boxShadow: '0 0 0 15px rgba(212, 175, 55, 0)' },
        },
        reveal: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
        'gold': '0 4px 30px rgba(212, 175, 55, 0.3)',
        'gold-lg': '0 10px 50px rgba(212, 175, 55, 0.4)',
        'elegant': '0 20px 60px rgba(15, 23, 42, 0.15)',
        'card': '0 4px 20px rgba(15, 23, 42, 0.08)',
        'card-hover': '0 20px 40px rgba(15, 23, 42, 0.15)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#102a43',
            h1: {
              fontFamily: 'var(--font-playfair), Playfair Display, serif',
            },
            h2: {
              fontFamily: 'var(--font-playfair), Playfair Display, serif',
            },
            h3: {
              fontFamily: 'var(--font-playfair), Playfair Display, serif',
            },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
