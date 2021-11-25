// webpack.config.js
const path = require('path')
module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolveLoader: {
    modules: ['node_modules', './']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'syncLoader',
          options: {
            message: '升值加薪'
          }
        }
      }
    ]
  }
}