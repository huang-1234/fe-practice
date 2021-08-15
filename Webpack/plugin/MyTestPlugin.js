// MyTestPlugin.js
const { ConcatSource } = require("webpack-sources") // 用来写入
class MyBannerPlugin {
  constructor(options) {
    // 获取传入的option信息
    this.msg = options.msg
  }  // 我们需要一个apply方法(为了获取compiler)，接收compiler作为参数表示这次打包的上下文。
  apply(compiler) {
    const msg = this.msg    // 指定挂载的 webpack 钩子函数
    // 使用compiler钩子compilation，即编译（compilation）创建之后，执行插件。
    compiler.hooks.compilation.tap("MyTestPlugin", compilation => {
      // compilation的 optimizeChunkAssets 钩子，可以利用这个钩子实现为每个文件插入信息
      compilation.hooks.optimizeChunkAssets.tap("MyTestPlugin", chunks => {
        for (const chunk of chunks) {
          for (const file of chunk.files) {
            compilation.updateAsset(file, old => {
              return new ConcatSource(msg, "\n", old);
            });
          }
        }
      })
    })
  }
}
module.exports = MyTestPlugin
