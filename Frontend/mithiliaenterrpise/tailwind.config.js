const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes:{
        slideDown:{
          '0%':{transform:'translateY(-100%)'},
          '100%':{transform:'translateY(0)'},
        },
        slideUp:{
          '0%':{transform:'translateY(0%)'},
          '100%':{transform:'translateY(-100%)'},
        },
        formGrow:{
          '0%':{transform:'opacity(0%)'},
          '100%':{transform:'opacity(100%)'},

        },

      },
      animation:{
        slideDown:'slideDown 1s ease-out',
        slideUp:'slideUp 1s ease-in'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
