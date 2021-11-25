"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _abs = require("./minusUtils/abs.js");

var _default = function _default(a, b) {
  return (0, _abs.abs)(a) + (0, _abs.abs)(b);
};

exports["default"] = _default;