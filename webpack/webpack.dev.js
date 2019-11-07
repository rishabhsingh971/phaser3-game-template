const merge = require("webpack-merge");
const common = require("./webpack.common");

const dev = {
  mode: "development",
  // devtool: "eval",
  devtool: "eval-source-map",
  devServer: {
    open: true
  },
  module: {
    rules: [
      {
        test: [/\.vert$/, /\.frag$/],
        use: "raw-loader"
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml)$/i,
        use: "file-loader"
      }
    ]
  },
};
module.exports = merge(common, dev)