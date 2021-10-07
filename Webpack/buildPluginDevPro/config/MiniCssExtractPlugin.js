const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (config, resolve) => {
  return () => {
    config
      .oneOf("normal")
      .plugin("mini-css-extract")
      .use(MiniCssExtractPlugin);
  };
};
