"use strict";

var fs = require('fs');

var path = require('path');

var parser = require('@babel/parser');

var traverse = require('@babel/traverse')["default"];

var babel = require('@babel/core'); // 统一处理错误


var _require = require('./handleError/fsCallback'),
  handlefsError = _require.handlefsError;

var getModuleInfo = function getModuleInfo(file) {
  var body = fs.readFileSync(file, 'utf-8'); // console.log(body)

  var ast = parser.parse(body, {
    sourceType: 'module'
  }); // console.log(ast.program.body)

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
  return moduleInfo;
};

var parseModules = function parseModules(file) {
  // 定义依赖图
  var depsGraph = {}; // 首先获取入口的信息

  var entry = getModuleInfo(file);
  var temp = [entry];

  for (var i = 0;i < temp.length;i++) {
    var item = temp[i];
    var deps = item.deps;

    if (deps) {
      // 遍历模块的依赖，递归获取模块信息
      for (var key in deps) {
        if (deps.hasOwnProperty(key)) {
          temp.push(getModuleInfo(deps[key]));
        }
      }
    }
  }

  temp.forEach(function (moduleInfo) {
    depsGraph[moduleInfo.file] = {
      deps: moduleInfo.deps,
      code: moduleInfo.code
    };
  }); // console.log(depsGraph)

  return depsGraph;
}; // 生成最终可以在浏览器运行的代码


var bundle = function bundle(file) {
  var depsGraph = JSON.stringify(parseModules(file));
  return "(function(graph){\n        function require(file) {\n            var exports = {};\n            function absRequire(relPath){\n                return require(graph[file].deps[relPath])\n            }\n            (function(require, exports, code){\n                eval(code)\n            })(absRequire, exports, graph[file].code)\n            return exports\n        }\n        require('".concat(file, "')\n    })(").concat(depsGraph, ")");
};

var build = function build(file) {
  var content = bundle(file); // 写入到dist/bundle.js

  if (!fs.existsSync('dist', handlefsError({
    type: 'isExist'
  }))) {
    fs.mkdir('dist', handlefsError({
      type: 'mkdir'
    }));
  }

  fs.mkdir('dist', handlefsError({
    type: 'mkdir'
  }));
  fs.writeFile('./dist/bundle.js', content, handlefsError({
    type: 'write',
    message: 'hsq'
  }));
};

build('./src/index.js');