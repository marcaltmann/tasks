const path = require('path');
const mode = process.env.NODE_ENV === 'production' ?
  'production' : 'development';

const config = {
  mode,
  module: {
    rules: [
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

module.exports = config;
