const commonPaths = require("./common-paths");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const config = {
  output: {
    path: commonPaths.outputPath,
    publicPath: "/",
  },
  target: "web",
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         chunks: 'initial',
  //         test: /[\\/]node_modules[\\/]semantic-ui-([\S]+)[\\/]/,
  //         name: 'vendor',
  //         enforce: true,
  //       },
  //     },
  //   },
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: `public/index.html`,
      // favicon: `public/favicon.ico`,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/Extension/manifest.json", to: "[name][ext]" },
        { from: "src/Extension/service_worker.js", to: "js/[name][ext]" },
        { from: "src/Extension/popup.html", to: "[name][ext]" },
        // { from: "src/Extension/popup.js", to: "js/[name][ext]" },
        // { from: "src/Extension/background.js", to: "js/[name][ext]" },
        // { from: "src/Extension/worker.js", to: "js/[name][ext]" },
        // // {
        //   from: "src/Extension/encoders/*",
        //   to: "encoders/[name][ext]",
        // },
        // {
        //   from: "src/Extension/workers/*",
        //   to: "workers/[name][ext]",
        // },
        // { from: "src/Images/*", to: "images/[name][ext]" },
      ],
    }),
  ],
};

module.exports = config;
