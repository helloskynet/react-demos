const { entry, htmlEntry } = require('./getEntry');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    ...entry,
  },
  output:{
    filename: './script/[name].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          name: 'react',
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          filename: './commonScript/[name].bundle.js',
        },
        jquery: {
          name: 'jquery',
          test: /[\\/]node_modules[\\/](jquery)[\\/]/,
          filename: './commonScript/[name].bundle.js',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [...htmlEntry, new CleanWebpackPlugin()],
};
