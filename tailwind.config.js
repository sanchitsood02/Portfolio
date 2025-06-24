// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bento: {
          indigo: "#4D55CC",
          teal: "#007074",
          amber: "#FFB200",
          beige: "#F7F4EA",
          plum: "#640D5F",
          orange: "#EB5B00",
          raspberry: "#D91656",
        },
      }
    },
  },
  plugins: [],
};