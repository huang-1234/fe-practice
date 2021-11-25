"use strict";

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
var fs = require('fs');

var parser = require('@babel/parser');

var getModuleInfo = function getModuleInfo(file) {
  var body = fs.readFileSync(file, 'utf-8');
  var ast = parser.parse(body, {
    // 表示我们要解析的是es6模块
    sourceType: 'module'
  }); // console.log(ast)

  console.log('ast.program.body=======');
  console.log(ast.program.body);
};

getModuleInfo('./src/index.js');