/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Surfaces
        paper: '#FAF8F3',
        air: '#FCFDFF',
        bone: '#FBEDB0',
        // Ink
        navy: {
          DEFAULT: '#3F4348',
          soft: '#6F6A64',
          muted: '#6F6A64',
        },
        // Bold Scandinavian summer accents
        ocean: {
          DEFAULT: '#0A1680',
          deep: '#070d5c',
        },
        sky: {
          bright: '#93B2F8',
          wash: '#F7FBFD',
        },
        sage: '#A8B8A3',
        butter: '#FBEDB0',
        charcoal: '#4A4A4A',
        citrus: {
          DEFAULT: '#D8862E',
          deep: '#C27828',
        },
        cream: '#FFFFFF',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Caveat"', 'cursive'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.28em',
        label: '0.2em',
      },
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
        gentle: '0 12px 28px -20px rgba(10, 22, 128, 0.08)',
        photo:
          '0 20px 44px -28px rgba(10, 22, 128, 0.09), 0 8px 20px -14px rgba(147, 178, 248, 0.12)',
        postcard:
          '0 10px 28px -18px rgba(10, 22, 128, 0.06), 0 4px 12px -8px rgba(10, 22, 128, 0.04)',
      },
      animation: {
        'fade-up': 'fadeUp 1s ease-out forwards',
        'fade-up-delay': 'fadeUp 1.05s ease-out 0.18s both',
        'fade-up-slow': 'fadeUp 1.05s ease-out 0.42s both',
        float: 'float 14s ease-in-out infinite',
        'float-slow': 'float 18s ease-in-out infinite',
        'rsvp-note-in': 'rsvpNoteIn 0.45s ease-out both',
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
        rsvpNoteIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
