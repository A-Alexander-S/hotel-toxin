const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')

const PATH = {
  source: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  mode: "development",
  // resolve: {
  //   alias: {
  //     absolute: path.resolve(__dirname, 'src'),
  //   },
  // },
  entry: {
    'index': PATH.source + '/pages/index/index.js',
    'twoIndex': PATH.source + '/pages/twoIndex/twoIndex.js',
    'ui_kit-1': PATH.source + '/pages/ui_kit/ui_kit-1/ui_kit-1.js',
    'formElements': PATH.source + '/pages/ui_kit/formElements/formElements.js',
  },
  output: {
    path: PATH.dist,
    filename: 'js/[name].js',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: PATH.dist + '/index.html',
      template: PATH.source + '/pages/index/index.pug',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: PATH.dist + '/twoIndex.html',
      template: PATH.source + '/pages/twoIndex/twoIndex.pug',
      chunks: ['twoIndex'],
    }),
    new HtmlWebpackPlugin({
      filename: PATH.dist + '/ui_kit/ui_kit-1.html',
      template: PATH.source + '/pages/ui_kit/ui_kit-1/ui_kit-1.pug',
      chunks: ['ui_kit-1'],
    }),
    new HtmlWebpackPlugin({
      filename: PATH.dist + '/ui_kit/formElements.html',
      template: PATH.source + '/pages/ui_kit/formElements/formElements.pug',
      chunks: ['formElements'],
    }),
    new MiniCssExtractPlugin({
      filename: '/styles/[name].css',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: "pug-loader",
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        type: 'asset/resource',
        exclude: PATH.source + '/assets/fonts/',
        generator: {
          filename: 'images/[name][ext][query]'
        }
      },
      {
        test: /\.ico$/,
        dependency: { not: ['url'] },

        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              limit: 8192,
            }
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]'
        }
      },
    ],
  }
};