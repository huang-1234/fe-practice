"use strict";

var fs = require('fs');

var path = require('path');

var parser = require('@babel/parser');

var traverse = require('@babel/traverse')["default"];

var babel = require('@babel/core');

var getModuleInfo = function getModuleInfo(file) {
  var body = fs.readFileSync(file, 'utf-8');
  var ast = parser.parse(body, {
    sourceType: 'module'
  });
  var deps = {};
  traverse(ast, {
    ImportDeclaration: function ImportDeclaration(_ref) {
      var node = _ref.node;
      var dirname = path.dirname(file);
      var absPath = './' + path.join(dirname, node.source.value);
      deps[node.source.value] = absPath;
    }
  });

  var _babel$transformFromA = babel.transformFromAst(ast, null, {
    presets: ["@babel/preset-env"]
  }),
      code = _babel$transformFromA.code;

  var moduleInfo = {
    file: file,
    deps: deps,
    code: code
  };
  console.log(moduleInfo);
  return moduleInfo;
};

getModuleInfo('./src/index.js');

var getModuleInfoNoParams = function getModuleInfoNoParams() {
  return getModuleInfo('./src/index.js');
};

module.exports = {
  getModuleInfo: getModuleInfo,
  getModuleInfoNoParams: getModuleInfoNoParams
};