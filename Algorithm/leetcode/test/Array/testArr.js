
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

const dArr = new Array();
dArr[0] = 1;console.log(dArr[0]);
