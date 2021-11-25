"use strict";

var _require = require('./bundleTraverseAstAndUseBabelCoreTranES6toES5'),
    getModuleInfo = _require.getModuleInfo;

var parseModules = function parseModules(file) {
  // 定义依赖图
  var depsGraph = {}; // 首先获取入口的信息

  var entry = getModuleInfo(file);
  var temp = [entry];

  for (var i = 0; i < temp.length; i++) {
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
  });
  console.log(depsGraph);
  return depsGraph;
};

var depsGraph = parseModules('./src/index.js');

var fs = require('fs');

var path = require('path');

function writeDepsGraph(depsGraphStr) {
  console.log(__dirname);
  console.log(path.dirname(__dirname));
  fs.mkdir('bundle/json', function (error) {
    if (error) {
      console.log(error);
      return false;
    }
  });
  fs.writeFile(__dirname + '/bundle/json/bundle1.json', depsGraphStr, 'utf-8', function (error) {
    if (error) {
      console.log(error);
      return false;
    }

    console.log('依赖图写入成功');
  });
}

writeDepsGraph(JSON.stringify(depsGraph));