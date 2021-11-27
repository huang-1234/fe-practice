// webpack.config.js
const path = require('path')

// self
const DemoWebpackPluginDemo1 = require('./self_webpack/my_plugin/plugin_demo1')

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
    modules: ['node_modules', './', path.join(__dirname, '/src/my_loader')]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use:[
        {
          loader: 'syncLoader',
          options: {
            message: '升值加薪'
          }
          }
        ]
      }
    ]
  },
  plugins: [
    new DemoWebpackPluginDemo1()
  ],
  devServer: {
    contentBase: './dist',
    overlay: {
      warning: true,
      errors: true
    },
    open: true
  }
}