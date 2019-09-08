const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: ['./src/App.js', './src/App.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/dist')
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
          plugins: [
            '@babel/transform-runtime',
            '@babel/plugin-proposal-class-properties',
          ]
        }
      }
    ]
  },
  node: {
    fs: 'empty'
  },
  devServer: {
    contentBase: './public/',
    watchContentBase: true,
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.DefinePlugin(
      { 
        'process.env.NODE_ENV': JSON.stringify('production'),
        'CONFIG': JSON.stringify(require('config'))
      }
    )
  ]
};
