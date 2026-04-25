/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './devnest/**/*.jsx',
    './devnest/pages/**/*.jsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Instrument Serif'", 'serif'],
        body: ["'Barlow'", 'sans-serif'],
      },
      colors: {
        foreground: '#ffffff',
      },
    },
  },
  plugins: [],
};
