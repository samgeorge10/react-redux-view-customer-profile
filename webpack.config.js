/**
 * Webpack config file to create bundle and place it in the dist folder based on the node environment
 * 
 * @file webpack.config.js
 * @author: Sam George
 * @since: 1.0.0
 */

 const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  outputPath = path.resolve(__dirname, 'dist'),
  DEVELOPMENT = 'development',
  TEMPLATE = './index.html';

let config = {
  mode: DEVELOPMENT, // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  context: path.join(__dirname, 'app'),
  // the home directory for webpack
  // the entry and module.rules.loader option
  // is resolved relative to this directory
  entry: [
    'babel-polyfill',
    './index.js'
  ],
  output: {
    path: outputPath,
    filename: 'scripts.js',
    publicPath: '/'
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'app')
    ],
    extensions: ['.js', '.jsx', '.json'],
    enforceExtension: false
  },
  devServer: {
    inline: true,
    port: 3000,
    contentBase: './dist',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Customer Profile',
      template: TEMPLATE,
      filename: "index.html"
    })
  ]
};

module.exports = config;