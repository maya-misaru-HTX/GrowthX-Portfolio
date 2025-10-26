/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'growthx-bg': '#F1EEE9',
        'growthx-accent': '#E6E3DE',
        'growthx-border': '#D4D1CC',
        'growthx-text': '#1A1A1A',
        'growthx-secondary': '#6B6B6B',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '5xl': '64rem',
      },
    },
  },
  plugins: [],
}
