const path = require("path");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.scss$/,
    loader: ["style-loader", "postcss-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../../src"),
  });
  return config;
};
