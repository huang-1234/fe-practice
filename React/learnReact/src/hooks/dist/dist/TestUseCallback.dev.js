"use strict";

exports.__esModule = true;

var react_1 = require("react");

var ChildrenComponent_1 = require("./ChildrenComponent");

var num = 0;
exports["default"] = react_1["default"].memo(function () {
  console.log('render num: ', ++num); // 打印执行次数

  var _a = react_1.useState(0),
      count = _a[0],
      setCount = _a[1];

  var CountAddOne = react_1.useCallback(function () {
    console.log('看下这个函数useCallback(CountAddOne,[])');
    setCount(++count);
  }, [count]); // const unChangeCount = useCallback(() => {
  //   console.log('看下这个函数useCallback(unChangeCount,[])')
  //   setCount(count)
  // }, [count])

  var unChangeCount = function unChangeCount() {
    console.log('看下这个函数useCallback(unChangeCount,[])');
    setCount(count);
  };

  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("p", null, "count: ", count, " "), react_1["default"].createElement(ChildrenComponent_1["default"], null), react_1["default"].createElement("button", {
    onClick: CountAddOne
  }, " CountAddOne  "), react_1["default"].createElement("button", {
    onClick: unChangeCount
  }, " unChangeCount "));
});