const path = require("path");

module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx)'],
  addons: [
    "@storybook/addon-knobs/register",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/preset-scss",
    "storybook-addon-paddings",
  ],

  //Need to app PostCSS Loader for Tailwind CSS
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader',"postcss-loader"],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  },
};
