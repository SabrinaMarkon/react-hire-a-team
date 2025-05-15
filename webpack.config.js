const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
  mode: 'development',     // set mode option, 'development' or 'production'
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname,'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,      
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(mp4|webm|ogv|png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: './src/index.html'
    })
  ],
  devtool: 'inline-source-map',
};

module.exports = config
