const propValues = require("./prop-values");
const generator = require("../../utils/dynamic-class-generator");

module.exports = {
  ...generator(["text_x_600", "bg_x_200"], propValues.color),
};
