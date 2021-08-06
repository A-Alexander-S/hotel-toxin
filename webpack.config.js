const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PATH = {
  source: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  // context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    'index': PATH.source + '/pages/index/index.js',
    'twoIndex': PATH.source + '/pages/twoIndex/twoIndex.js',
    'ui_kit-1': PATH.source + '/pages/ui_kit/ui_kit-1/ui_kit-1.js',
  },
  output: {
    path: PATH.dist, //path.resolve(__dirname, "dist")
    filename: 'js/[name].js',
    // assetModuleFilename: 'images/[name][ext][query]',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    port: 8080,
    // open: true,
    // hot: true,
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
    new MiniCssExtractPlugin({
      filename: '/styles/[name].css',
    }),
    // new webpack.HotModuleReplacementPlugin(),
    // new CleanWebpackPlugin({}),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: "pug-loader",
        options: {
          pretty: true
        }
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        type: 'asset/resource',
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
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]'
        }
      },
    ],
  }
};