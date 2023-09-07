/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'voyage': ['']
    },
    borderRadius: {
      'half': '50%'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'metal': '#88b2c4',
    },
    extend: {
      inset: {
        '-9rem': '-9rem',
      },
      height: {
        '155': '90rem',
        '452': '452px'
      },
      width: {
        '522': '522px'
      }
    },
  },
  plugins: [],
}

