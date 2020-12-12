const propValues = require("./prop-values");
const generator = require("../../utils/dynamic-class-generator");

module.exports = {
  ...generator(
    [
      "bg_x_500",
      "hover__bg_x_600",
      "text_x_500",
      "border_x_400",
      "hover__bg_x_100",
      "bg_x_100",
      "hover__text_x_700",
      "hover__text_x_500",
    ],
    propValues.color
  ),
};
