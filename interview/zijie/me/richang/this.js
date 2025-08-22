var length = 10;

function Fun1() {
  

  // this.length = 555;
  // console.log(this);
  return this.length + 1;
}
console.log(Fun1());

// let obj1 = {
//   length: 5,
//   output() {
//     console.log(this)
//   }
// }