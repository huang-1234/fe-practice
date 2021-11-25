"use strict";

var fs = require('fs');

var path = require('path');

var parser = require('@babel/parser');

var traverse = require('@babel/traverse')["default"];

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
      console.log(node);
      var absPath = './' + path.join(dirname, node.source.value);
      deps[node.source.value] = absPath;
    }
  });
  console.log(deps);
};

getModuleInfo('./src/index.js');