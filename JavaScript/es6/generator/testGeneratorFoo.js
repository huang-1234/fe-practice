let a = 1;
let b = 2;
function* foo() {
  a++;
  yield;
  b = b * a;
  console.log(b)
  a = (yield b) + 3;
  console.log(a)
}
function* bar() {
  b--;
  yield;
  a = (yield 8) + b;
  b = a * (yield 2);
}

const { run } = require("./generatorRunner")

run(foo)