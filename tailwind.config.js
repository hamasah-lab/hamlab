/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './app/**/*.{tsx,jsx}',
    './src/components/**/*.{ts,tsx,jsx}',
    './src/dist/**/*.{ts,tsx,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nunito)'],
      },
      colors: {
        'custom-black': '#34395e',
        'custom-light-gray': '#9C9C9C',
        'custom-light-gray-2': '#F6F6F6',
        'custom-white': '#f9f9f9',
        'custom-white-broken': '#FAFDFB',
        'custom-light-purple': '#95a0f4',
        'custom-light-purple-2': '#acb5f6',
        'custom-purple': '#6777EF',
        'custom-white-purple': '#fdfdff',
        'custom-white-purple-2': '#e4e6fc',
      },
      screens: {
        xs: '400px',
      },
    },
  },
  plugins: [],
}
