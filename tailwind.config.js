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
      white: "#ffffff",
      dark_red: "#562121",
      dark_green: "#215623",
    },
    textColor: {
      gray: "#A4A4A4",
      white: "#ffffff",
      red: "#FF3131",
      green: "#00CD00",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
