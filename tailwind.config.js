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
    },
  },
  plugins: [],
}
