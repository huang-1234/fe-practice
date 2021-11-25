// bundle.js
/*
const fs = require('fs')
const getModuleInfo = file => {
  const body = fs.readFileSync(file, 'utf-8');
  console.log(body)
}
getModuleInfo('./src/index.js')
 */

// bundle.js
const fs = require('fs')
const parser = require('@babel/parser')
const getModuleInfo = file => {
    const body = fs.readFileSync(file, 'utf-8')
    const ast = parser.parse(body, {
        // 表示我们要解析的是es6模块
       sourceType: 'module'
    })
    // console.log(ast)
    console.log('ast.program.body=======')
    console.log(ast.program.body)
}
console.log(__dirname)
// getModuleInfo('./src/index.js')
