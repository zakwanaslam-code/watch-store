/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "brand-orange": "#F5A623",
      },
      // Naya animation define kiya - watch halki si
      // upar-neeche float karegi, jaise hawa mein tair rahi ho
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
      animation: {
        float: "float 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};