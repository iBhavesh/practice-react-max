module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "11/12": "95%",
      },
    },
  },
  variants: {
    extend: {
      textOpacity: ["dark"],
    },
  },
  plugins: [],
};
