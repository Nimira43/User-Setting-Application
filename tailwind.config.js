/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main': '#ff4500',
        'support': '#87ceeb',
        'dark': '#111',
        'light': '#fffcfa',
        'grey-dark': '#333',
        'grey-medium': '#999',
        'grey-light': '#ccc',
        'grey-light': '#eee'
      }
    },
  },
  plugins: [],
}

