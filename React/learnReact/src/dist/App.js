"use strict";
exports.__esModule = true;
// import React from 'react'
var React = require("react");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var rootReducer = redux_1.combineReducers(reducers_1.enthusiasm);
var store = redux_1.createStore(rootReducer);
// import ScrollingList from './components/ScrollingList'
// import Count from './components/Count'
// import FuncA from './components/FuncA'
// import ReactLife from './components/ReactLife'
// import TestUseCallback from './hooks/testUseCallback'
// import ComponentA from './hooks/ComponentA'
// import TestUseMemo from './hooks/TestUseMemo'
// import TestUseEffect from './hooks/TestUseEffect/TestUseEffect'
// redux
var Hello_1 = require("./learn-redux/containers/Hello");
var reducers_1 = require("./learn-redux/reducers");
function App() {
    var list = [1, 2, 3, 4, 5, 6];
    return (React.createElement("div", null,
        React.createElement(react_redux_1.Provider, { store: store },
            React.createElement(Hello_1["default"], null))));
}
exports["default"] = App;
