class DemoWebpackPluginDemo1 {
  constructor() {
    console.log('plugin init')
  }
  // compiler是webpack实例
  apply(compiler) {
    // 一个新的编译(compilation)创建之后（同步）
    // compilation代表每一次执行打包，独立的编译
    compiler.hooks.compile.tap('DemoWebpackPluginDemo1', compilation => {
      console.log(compilation)
    })
    // 生成资源到 output 目录之前（异步）
    // 第一种写法
    compiler.hooks.emit.tapAsync('DemoWebpackPluginDemo1', (compilation, fn) => {
      console.log(compilation)
      compilation.assets['index.md'] = {
        // 文件内容
        source: function () {
          return 'this is a demo for plugin'
        },
        // 文件尺寸
        size: function () {
          return 25
        }
      }
      fn()
    })

    // 第二种写法(promise)
    compiler.hooks.emit.tapPromise('DemoWebpackPlugin', (compilation) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      }).then(() => {
        console.log(compilation.assets)
        compilation.assets['index.md'] = {
          // 文件内容
          source: function () {
            return 'this is a demo for plugin'
          },
          // 文件尺寸
          size: function () {
            return 25
          }
        }
      })
    })
    // 第三种写法(async await)
    compiler.hooks.emit.tapPromise('DemoWebpackPlugin', async (compilation) => {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
      console.log(compilation.assets)
      compilation.assets['index.md'] = {
        // 文件内容
        source: function () {
          return 'this is a demo for plugin'
        },
        // 文件尺寸
        size: function () {
          return 25
        }
      }
    })
  }
}

module.exports = DemoWebpackPluginDemo1
