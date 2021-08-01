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
    'twoIndex': PATH.source + '/pages/twoIndex/twoIndex.js'
  },
  output: {
    path: PATH.dist, //path.resolve(__dirname, "dist")
    filename: 'js/[name].js',
    // assetModuleFilename: 'images/[name][ext][query]',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    port: 8080,
    // open: true,
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
    new MiniCssExtractPlugin({
      filename: '/styles/[name].css',
    }),
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
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]'
        }
      },
      // {
      //   test: /\.(png|jpg|svg|gif)$/,
      //   dependency: { not: ['url'] },

      //   use: [
      //     {
      //       // loader: 'file-loader',
      //       loader: 'url-loader',
      //       options: {
      //         name: 'images/[name].[ext]',
      //         limit: 8192,
      //       }
      //     },
      //   ],
      //   type: 'javascript/auto',
      // },
      // {
      //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      //   // dependency: { not: ['url'] },

      //   // type: 'asset/inline',
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         name: 'fonts/[name].[ext]',
      //         limit: 8192,
      //       }
      //     },
      //   ],
      // },
      // {
      //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      //   // dependency: { not: ['url'] },
      //   loader: 'file-loader',
      //   options: {
      //     name: 'fonts/[name].[ext]'
      //   }
      // },
      // {
      //   test: /\.png/,
      //   type: 'asset/resource'
      // }
    ],
  }
};