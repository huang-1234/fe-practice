const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')

const getModuleInfo = file => {
    const body = fs.readFileSync(file, 'utf-8')
    const ast = parser.parse(body, {
       sourceType: 'module'
    })
    const deps = {}
    traverse(ast, {
        ImportDeclaration({ node }) {
            const dirname = path.dirname(file);
            const absPath = './' + path.join(dirname, node.source.value)
            deps[node.source.value] = absPath
        }
    })
    const { code } = babel.transformFromAst(ast, null, {
        presets: ["@babel/preset-env"]
    })
    const moduleInfo = { file, deps, code }
    console.log(moduleInfo)
    return moduleInfo
}
getModuleInfo('./src/index.js')

const getModuleInfoNoParams = () => {
  return getModuleInfo('./src/index.js')
}
module.exports = {
  getModuleInfo,
  getModuleInfoNoParams
}
