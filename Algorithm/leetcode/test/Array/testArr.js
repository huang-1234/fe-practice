
// const f1 = new Function('a', 'b', `return a+b`);
// const out = f1.constructor
// console.log(out);
/*
function getSum(a, b, c) {
  // this.rate = 0.5
  console.log(this)
  function getTow(a, b) {
    console.log(a, b,this);
    return (a+b)*this.rate
  }
  const aANDb = getTow(a, b);
  console.log(aANDb, c);
  return (aANDb + c)*this.rate
}

obj1 = {
  rate : 0.5
}
console.log(getSum.call(obj1, 1, 2, 3));
 */

/* get <TowS></TowS> */

// const dArr = new Array(1, 2, 3, 4, 5, 6, 7);

const len1 = 10, len2 = 10;
let dp = new Array(len1 + 1).fill(new Array(len2 + 1).fill(0))

console.log(dp);