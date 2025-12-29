/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/components/**/*.{vue,js}', './app/layouts/**/*.vue', './app/pages/**/*.vue', './app/app.vue'],
  theme: {
    extend: {
      colors: {
        primary: '#0A3D62',
        secondary: '#3C6382',
        accent: '#38ADA9',
        surface: '#F7F9FB',
        text: '#1A1A1A'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    }
  }
}
