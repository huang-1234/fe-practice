"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Actions;
(function (Actions) {
    Actions["INCREMENT"] = "increment";
    Actions["DECREMENT"] = "decrement";
})(Actions || (Actions = {}));
var initialState = { count: 0 };
function reducer(state, action) {
    switch (action.type) {
        case Actions.INCREMENT:
            return { count: state.count + 1 };
        case Actions.DECREMENT:
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}
function Counter() {
    var _a = react_1.useReducer(reducer, initialState), state = _a[0], dispatch = _a[1];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        "Count: ",
        state.count,
        react_1["default"].createElement("button", { onClick: function () { return dispatch({ type: 'decrement' }); } }, "-"),
        react_1["default"].createElement("button", { onClick: function () { return dispatch({ type: 'increment' }); } }, "+")));
}
exports["default"] = Counter;
