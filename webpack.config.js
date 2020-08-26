const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devServer: {
    compress: true,
  },

  entry: "./src/index.tsx",

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "script.js",
    chunkFilename: "[name].[hash].js",
  },

  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },

  module: {
    rules: [
      { test: /\.tsx?$/i, loader: "ts-loader" },
      {
        test: /\.css$/,
        use: [MiniCSSExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new MiniCSSExtractPlugin({
      filename: "styles.css",
      chunkFilename: "styles.css",
    }),
  ],
};
