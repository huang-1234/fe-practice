


function add(_a, _b) {
  let a, b;
  a, b = 3, 6;
  console.log(a,b);
  return a + b;
}

function exchange(_a, _b) {
  let a = _a, b = _b;
  a, b = b, a;
  console.log(a,b);
  return [a, b];
}
console.log(exchange(1,9));