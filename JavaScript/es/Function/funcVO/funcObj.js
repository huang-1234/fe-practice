
function sumFunc(a) {
  console.log(a);
  var a = 45;
  return (b) => {
    console.log(a + b);
    return a + b;
  }
}
const sum = sumFunc(1)
console.log(sum(4));
