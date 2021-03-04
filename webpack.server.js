const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const webpackNode = require("webpack-node-externals");

const config = {
  // Inform webpack we are building a bundle js for server side
  target: "node",

  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },

  externals: [webpackNode()],
};

module.exports = merge(baseConfig, config);
