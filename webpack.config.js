const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/javascripts/main.js',
    './src/stylesheets/application.scss'
  ],

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'stylesheets/application.css',
      allChunks: true
    }),

    new HTMLWebpackPlugin({
      template: './src/templates/new.pug',
      filename: 'new.html'
    }),
  ]
};
