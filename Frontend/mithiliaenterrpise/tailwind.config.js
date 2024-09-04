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
          formGrow: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
          formColl: {
            '0%': { opacity: 1 },
            '100%': { opacity: 0 },
          },
          scroll: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(100%)' },
          },
          loopscroll: {from:{transform:"translateX(0%)"},
                        to:{transform:"translateX(-298%)"},},

      },
      animation:{
        slideDown:'slideDown 1s ease-out',
        slideUp:'slideUp 1s ease-in',
        formGrow:'formGrow 1s ease-in',
        formColl:'formColl 1s ease-in',
        scroll: 'scroll 10s linear infinite',
        loopscroll:'loopscroll 18s linear infinite'
      
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
