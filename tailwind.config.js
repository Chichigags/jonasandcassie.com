/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Surfaces — warm off-white paper, slightly cooler bone for alternating sections.
        paper: '#F6F4EF',
        bone: '#EFEDE7',
        // Deep blue-gray text. Two muted variants for body/secondary copy.
        navy: {
          DEFAULT: '#1F2A37',
          soft: '#3D4855',
          muted: '#6B7280',
        },
        // Soft summer gold — used very sparingly (subtitles, italic close lines).
        gold: {
          DEFAULT: '#C9A35D',
          deep: '#A8853F',
          soft: '#DCBE85',
        },
        celadon: '#7FA89C',
      },
      fontFamily: {
        // Editorial display serif — titles and italic accents only.
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        // Handwritten footer note only.
        script: ['"Caveat"', 'cursive'],
        // Sans — small labels and uppercase metadata only.
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.28em',
        label: '0.2em',
      },
      // Extended opacity so slash modifiers like text-navy/70 resolve.
      opacity: {
        4: '0.04',
        6: '0.06',
        8: '0.08',
        12: '0.12',
        15: '0.15',
        18: '0.18',
        22: '0.22',
        35: '0.35',
        45: '0.45',
        55: '0.55',
        65: '0.65',
        85: '0.85',
        88: '0.88',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      maxWidth: {
        prose: '38rem',
        content: '54rem',
        wide: '64rem',
      },
      borderRadius: {
        soft: '1.25rem',
      },
      boxShadow: {
        gentle: '0 14px 32px -18px rgba(31, 42, 68, 0.18)',
        photo:
          '0 28px 60px -32px rgba(31, 42, 68, 0.28), 0 8px 24px -12px rgba(31, 42, 68, 0.10)',
      },
      animation: {
        'fade-up': 'fadeUp 1s ease-out forwards',
        'fade-up-delay': 'fadeUp 1.05s ease-out 0.18s both',
        'fade-up-slow': 'fadeUp 1.05s ease-out 0.42s both',
        // Almost imperceptible vertical drift — flowers floating in air.
        float: 'float 14s ease-in-out infinite',
        'float-slow': 'float 18s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(1.25rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'rotate(-0.4deg) translateY(0)' },
          '50%': { transform: 'rotate(0.5deg) translateY(-3px)' },
        },
      },
    },
  },
  plugins: [],
}
