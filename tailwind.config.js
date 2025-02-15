/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans your files correctly
    ],
    theme: {
      extend: {},
    },
    plugins: [], // No need to import 'tailwindcss/components' separately
  };
  