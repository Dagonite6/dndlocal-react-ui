/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'text-color': '#0c0a09',
        'bg-color': '#082f49',
        'card': '#f9fafb',
        'btn': '#ea580c',
        'btn-hover': '#c2410c',
      },
    },
  },
  plugins: [],
}

