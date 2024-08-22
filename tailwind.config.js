/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}","./public/main.js"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        header:
          "url('.././images/header/image1.png')",
      },
    },
    screens: {
      mobile: "300px",
      desktop: "1200px",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light",
  },
};
