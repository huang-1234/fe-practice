// 引入一个包
const path = require('path');
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  entry: "./src/index.ts",

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
      // test 指定的时规则生效的文件
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
    
  },
  // 配置webpack
  plugins: [
    new HTMLWebPlugin({
      title: "这是自定义的标题",
    }),
  ]
};