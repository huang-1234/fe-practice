"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var reducers_1 = require("../reducers");
var store = redux_1.createStore(reducers_1.enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TS'
});
