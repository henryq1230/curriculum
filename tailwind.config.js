/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: false, // Prevents Tailwind from overriding the base styling of the main curriculum site
  },
  theme: {
    extend: {
      colors: {
        // We can define custom modern executive colors here
        brand: {
          dark: '#030712',
          card: '#1f2937',
          accent: '#10b981',
          highlight: '#34d399',
        }
      },
    },
  },
  plugins: [],
}
