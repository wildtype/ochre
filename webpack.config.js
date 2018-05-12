const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/javascripts/index.js',
    './src/stylesheets/application.scss'
  ],

  output: {
    filename: 'application.js',
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
        include: [path.resolve(__dirname,'src', 'templates')],
        loaders: [
          {loader: 'pug-loader', options: {pretty: true, doctype: 'html'}},
        ]
      },
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'stylesheets/application.css',
      allChunks: true
    }),

    new HTMLWebpackPlugin({
      template: './src/templates/index.pug'
    }),
  ]
};
