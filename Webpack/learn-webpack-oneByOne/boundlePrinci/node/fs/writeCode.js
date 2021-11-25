const fs = require('fs')
const { getModuleInfoNoParams } = require('../../bundleTraverseAstBabelCoreDependencyGraph.js')

console.log(getModuleInfoNoParams)
const mkBuildWriteCode = (buildDir) => {
  console.log(buildDir)
  fs.mkdir(buildDir, () => {
    if (error) {
      console.log(error);
      return false;
    }
    console.log('创建目录成功')
    fs.writeFile('../../build/bundle.es6Toes5.js', getModuleInfoNoParams().code, function (error) {
      if (error) {
        // throw new Error(error)
        console.log(error)
        return false
      }
      console.log('写入成功')
    })
  })
}
mkBuildWriteCode('build')
