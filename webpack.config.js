const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  entry: ["react-hot-loader/patch", "./src/index.js"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        rules: [
          {
            test: /\.(s*)css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  devServer: {
    contentBase: "./dist",
    hot: true,
    historyApiFallback: true,
  },
};
