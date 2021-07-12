
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

// const isProd = process.env.NODE_ENV = "production";/

module.exports =  {

  // mode: isProd ? "production" : "development",
  mode: "development",
  entry: {
    index: "./src/index.js",
    // search:"./src/search.js"
  },
  output: {
    // path: path.join(__dirname, "dist"),
    path: path.resolve(__dirname, '..', "dist"),
    filename:"bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:'My App',
      filename:"../public/index.html",
    })
  ],
  module: [
    
  ]


}