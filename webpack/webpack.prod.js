const merge = require("webpack-merge");
const common = require("./webpack.common");
const TerserPlugin = require("terser-webpack-plugin");

const prod = {
  mode: "production",
  output: {
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[name].[contenthash].chunk.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          filename: '[name].[contenthash].bundle.js'
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          },
        },
        // extractComments: false,
      })
    ]
  },
  devtool: false,
  performance: {
    maxEntrypointSize: 999000,
    maxAssetSize: 999000
  },
};

module.exports = merge(common, prod)