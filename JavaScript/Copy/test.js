let arr = [
  {
    title: 'yi'
  }
];
let obj1 = {
  name: 'h',
  num:[1,2,3]
}
// console.log(arr2 instanceof Array);

const checkedType = (target) => {
  return Object.prototype.toString.call(target)
    // .slice(8, -1);
}
const out = checkedType(true)
console.log(typeof out,':',out);