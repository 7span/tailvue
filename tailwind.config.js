const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
    options: {
      whitelist: ["bg-red-500"],
    },
  },
  theme: {
    fontFamily: {
      sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
    },
  },
};
