const path = require("path");
const webpack = require('webpack');

module.exports = {
  entry: ['./index.js'],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      },
      {
        test: /\.(ts)$/,
        loader: "ts-loader"
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
    extensions: ["*", ".js", ".jsx", ".ts"]
  },
  output: {
    path: path.resolve(__dirname, "web/dist/"),
    publicPath: "/web/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "web/public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};