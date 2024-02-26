var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: './src/app.js',
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // Tells webpack how to append CSS to the DOM as a style tag.
          'css-loader', // Tells webpack how to read a CSS file.
        ],
      },
      {
        test: [/\.jpg$/, /\.png$/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development',
  output: {
    path: __dirname + '/static/js',
    filename: 'bundle.js',
  },
  plugins: [],
};
