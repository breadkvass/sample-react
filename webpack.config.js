const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  mode: process.env.NODE_ENV,
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
              {
                loader: require.resolve('babel-loader'),
                options: {
                  plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
                },
              },
            ],
        },
        {
          test: /\.css$/i,
          exclude: /node_modules/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
          ],
        },
        {
          test: /\.(jpg|png)$/,
          use: {
            loader: 'url-loader',
          },
        },
        {
          test: /\.(woff|woff2)$/,
          type: 'asset/resource',
        },
    ],
  },
  resolve: {
    extensions: ['.*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[contenthash:8].js",
    clean: true,
    // publicPath: "/assets/"
  },
  devServer: {
    hot: true,
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: "public/favicon.ico",
      manifest: "public/manifest.json",
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};