const withMT = require("@material-tailwind/react/utils/withMT");
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#076034",
        secondary: "#037B40",
        pblack: "#232222",
        pwhite: "#F1F1F1",
      },
      maxWidth: {
        screenMobile: "640px", // Use this in your layout
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem", // Padding for all screens
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  darkMode: "class",
  plugins: [nextui()],
});
