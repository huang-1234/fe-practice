const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default

const getModuleInfo = file => {
  const body = fs.readFileSync(file, 'utf-8')
  const ast = parser.parse(body, {
    sourceType: 'module'
  })
  const deps = {}
  traverse(ast, {
    ImportDeclaration({ node }) {
      const dirname = path.dirname(file);
      console.log(node)
      const absPath = './' + path.join(dirname, node.source.value)

      deps[node.source.value] = absPath
    }
  })
  console.log(deps)
}
getModuleInfo('./src/index.js')
