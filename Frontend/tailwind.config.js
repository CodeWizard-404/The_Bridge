/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'custom-primary': '#b03264',
        'custom-hover': '#631c38',
      },
    },
  },
  plugins: [],
};

