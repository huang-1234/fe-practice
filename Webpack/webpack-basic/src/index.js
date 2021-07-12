document.write("hello index.js")

const { a, b, c } = require("./pages/page2")

const { getSum, getMutiply } = require("./pages/page1")

console.log(getSum(a, b));

getMutiply();