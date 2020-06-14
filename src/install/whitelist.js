const defaultOptions = require("./options");
const merge = require("lodash/merge");
const button = require("../components/button/whitelist");
const field = require("../components/field/whitelist");

module.exports = function(options) {
  const mergedOptions = merge(defaultOptions, options);
  const classes = [];

  //Field Sizes
  const fieldSizes = mergedOptions.fieldSizes;
  for (var fieldSize in fieldSizes) {
    const size = fieldSizes[fieldSize];
    classes.push(...[`h-${size}`, `w-${size}`]);
  }

  //Button
  classes.push(...[...button(mergedOptions), ...field(mergedOptions)]);
  console.log(classes);
  return classes;
};
