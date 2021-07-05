// //
// {
//   if (!Array.prototype.reduce) {
//     Array.prototype.reduce = function (fn, initValue) {
//       let result = initValue ? initValue : this[0];
//       for (let i = 0,Len = this.length;i < Len;i++) {
//         if (!this.hasOwnProperty(i)) continue;
//         reslut = fn(result, this[i], i, this);
//       }
//       return result;
//     }
//   }
// }

{
  Array.prototype.myreduce = function (fn, initValue) {

    let result = initValue ? initValue : this[0];
    for (let i = initValue? 1:0,Len = this.length;i < Len;i++) {
      if (!this.hasOwnProperty(i)) continue;
      result = fn(result, this[i], i, this);
    }
    return result;
  }
  const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const output = testArr.myreduce((a, b) => a + b,2)
  console.log(output);
}