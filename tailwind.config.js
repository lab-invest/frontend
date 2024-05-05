/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    backgroundColor: {
      primary: "#252525",
      secondary: "#303030",
      third: "#505050",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
