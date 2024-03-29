const path = require("path");

module.exports = {
  stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register",
    "@storybook/addon-actions",
    "@storybook/preset-scss",
    "storybook-addon-paddings",
  ],
};
