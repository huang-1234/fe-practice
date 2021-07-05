"use strict";
exports.__esModule = true;
var react_1 = require("react");
var initialValue = 0;
var refContainer = react_1.useRef(initialValue);
function TextInputWithFocusButton() {
    var inputEl = react_1.useRef(null);
    var onButtonClick = function () {
        // `current` 指向已挂载到 DOM 上的文本输入元素
        if ("object" === Object.prototype.toString.call(inputEl.current).slice(8, -1)) {
            inputEl.current.focus();
        }
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("input", { ref: inputEl, type: "text" }),
        react_1["default"].createElement("button", { onClick: onButtonClick }, "Focus the input")));
}
function InputContainer() {
    react_1["default"].createElement(TextInputWithFocusButton, null);
}
exports["default"] = InputContainer;
