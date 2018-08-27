const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const DIST = path.resolve(__dirname, 'dist')

module.exports = {
  entry: {
    app: './src/index.ts'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader'
    }]
  },
  plugins: [
    new CleanWebpackPlugin([DIST]),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  output: {
    path: DIST,
  }
}
