const moduleInfo = {
  file: './src/index.js',
  deps: { './add.js': './src\\add.js', './minus.js': './src\\minus.js' },
  code: '"use strict";\n' +
    '\n' +
    'var _add = _interopRequireDefault(require("./add.js"));\n' +
    '\n' +
    'var _minus = require("./minus.js");\n' +
    '\n' +
    'function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n' +
    '\n' +
    'var sum = (0, _add["default"])(1, 2);\n' +
    'var division = (0, _minus.minus)(2, 1);\n' +
    "console.log('sum>>>>>', sum);\n" +
    "console.log('division>>>>>', division);"
}

const fs = require('fs')
const mkBuildWriteCode = (buildDir) => {
  console.log(buildDir)
  fs.mkdir(`../../` + buildDir, (error) => {
    if (error) {
      console.log(error);
      return false;
    }
    console.log('创建目录成功')
    fs.writeFile('../../build/bundle.es6Toes5.js', moduleInfo.code,'utf8', function(error){
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
