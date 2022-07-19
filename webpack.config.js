const HtmlWebpackPlugin = require('html-webpack-plugin');
// const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const path = require('path')

module.exports = {
  entry: './src/index.js',
  // output: {
  //   filename: 'bundle.js',
  //   path: path.resolve(__dirname, 'dist'),
  //   publicPath: '/dist/',
  // },
  // ...add the babel-loader and preset
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      
    }),
  ],
  // ...add resolve to .jsx extension
  resolve: {
    extensions: ['*', '.js', '.jsx','css','svg','json'],
  },
  // ...
}