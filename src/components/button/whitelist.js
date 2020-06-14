const values = require("./prop-values");

module.exports = function(options) {
  const classes = [];

  for (var key in values.color) {
    const color = options.colors[key];
    classes.push(
      ...[
        `text-${color}-500`,
        `border-${color}-400`,
        `bg-${color}-100`,
        `bg-${color}-500`,
        `hover:bg-${color}-100`,
        `hover:bg-${color}-600`,
        `hover:text-${color}-500`,
        `hover:text-${color}-700`,
      ]
    );
  }

  return classes;
};
