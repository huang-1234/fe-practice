const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production'

function resolve(dir) {
  return path.resolve(__dirname, '..', dir);
}

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    app:'./src/main.tsx'
  },
  output: {
    path: resolve('dist'),
    filename:'[name].[contenthash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$ || \.ts?$/,
        use: 'ts-loader',
        include:[resolve('src')]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({

    }),
    new HtmlWebpackPlugin({
      template:'./public/index.html'
    })
  ],
  resolve: {
    extensions:['.ts','.tsx','.js']
  },
  devtool: isProd ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',
  devServer: {
    host: 'localhost',
    stats: 'errors-only',
    port: '8088',
    open:false
  }
}