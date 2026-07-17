/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "brand-orange": "#F5A623",
      },
      keyframes: {
        "slide-side": {
          "0%, 100%": { transform: "translateX(-15px)" },
          "50%": { transform: "translateX(15px)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "slide-side": "slide-side 2.5s ease-in-out infinite",
        "bounce-slow": "bounce-slow 2s ease-in-out infinite",
      },

      
    },
  },
  plugins: [],
};