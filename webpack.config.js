const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pathToBundle = path.resolve(__dirname, 'bundle');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[contenthash].js',
    path: pathToBundle,
  },
  mode: 'development',
  devServer: {
    contentBase: pathToBundle,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'MY AWESOME WEBPACK CONFIG',
      template: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
