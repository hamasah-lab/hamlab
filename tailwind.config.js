/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './app/**/*.{tsx,jsx}',
    './src/components/**/*.{ts,tsx,jsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nunito)'],
      },
      colors: {
        'c-black': '#34395e',
        'c-white': '#f9f9f9',
        'c-white-broken': '#FAFDFB',
        'c-light-purple': '#95a0f4',
        'c-light-purple-2': '#acb5f6',
        'c-purple': '#6777EF',
        'c-white-purple': '#fdfdff',
        'c-white-purple-2': '#e4e6fc',
      },
    },
  },
  plugins: [],
}
