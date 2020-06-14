const values = require("./prop-values");

module.exports = function(options) {
  const classes = [];

  values.color.forEach((key) => {
    const color = options.colors[key];
    classes.push(...[`bg-${color}-200`, `text-${color}-600`]);
  });

  return classes;
};
