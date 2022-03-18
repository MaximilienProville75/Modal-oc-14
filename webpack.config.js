var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/components/PopModal.js",
  output: {
    path: path.resolve("lib"),
    filename: "PopModal.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: "babel-loader",
      },
    ],
  },
};
