/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"JetBrains Mono"', 'monospace'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        background: '#f9f9f9',
        foreground: '#1a1a1a',
        accent: '#e2e2e2',
        subtle: '#8a8a8a'
      }
    },
  },
  plugins: [],
}

