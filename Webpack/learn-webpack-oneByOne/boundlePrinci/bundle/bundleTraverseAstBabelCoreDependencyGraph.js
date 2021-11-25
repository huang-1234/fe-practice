const {getModuleInfo } = require('./bundleTraverseAstAndUseBabelCoreTranES6toES5')
const parseModules = file => {
  // 定义依赖图
  const depsGraph = {}
  // 首先获取入口的信息
  const entry = getModuleInfo(file)
  const temp = [entry]
  for (let i = 0;i < temp.length;i++) {
    const item = temp[i]
    const deps = item.deps
    if (deps) {
      // 遍历模块的依赖，递归获取模块信息
      for (const key in deps) {
        if (deps.hasOwnProperty(key)) {
          temp.push(getModuleInfo(deps[key]))
        }
      }
    }
  }
  temp.forEach(moduleInfo => {
    depsGraph[moduleInfo.file] = {
      deps: moduleInfo.deps,
      code: moduleInfo.code
    }
  })
  console.log(depsGraph)
  return depsGraph
}
const depsGraph = parseModules('./src/index.js')

const fs = require('fs')
const path = require('path')

function writeDepsGraph(depsGraphStr) {
  console.log(__dirname)
  console.log(path.dirname(__dirname))
  fs.mkdir('bundle/json', function (error) {
    if (error) {
      console.log(error)
      return false;
    }
  })
  fs.writeFile(__dirname + '/bundle/json/bundle1.json', depsGraphStr, 'utf-8', function (error) {
    if (error) {
      console.log(error);
      return false
    }
    console.log('依赖图写入成功')
  })
}
writeDepsGraph(JSON.stringify(depsGraph))

