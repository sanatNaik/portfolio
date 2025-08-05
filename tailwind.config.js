/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing-gradient': 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
        'contact-gradient': 'linear-gradient(120deg, #dbeafe 0%, #93c5fd 100%)',
      },
    },
  },
  plugins: [],
}

