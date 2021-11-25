"use strict";

var _add = _interopRequireDefault(require("./add.js"));

var _minus = require("./minus.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var sum = (0, _add["default"])(1, 2);
var division = (0, _minus.minus)(2, 1);
console.log('sum>>>>>', sum);
console.log('division>>>>>', division);