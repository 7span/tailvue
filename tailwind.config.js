const defaultTheme = require("tailwindcss/defaultTheme");
const tailVueOptions = require("./src/options");
const whitelist = require("./src/install/whitelist");

module.exports = {
  purge: {
    content: ["./src/**/*.html", "./src/**/*.vue"],
    options: {
      whitelist: whitelist(tailVueOptions),
    },
  },
  theme: {
    fontFamily: {
      sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
    },
  },
};
