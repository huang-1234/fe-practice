// if (!Array.prototype.flat) {
//   Object.defineProperty(Array.prototype, 'flat', {
//     value: function (depth) {
//       const _dh = depth ? depth : 1;


//       // Steps 1-2.
//       if (this == null) {
//         throw new TypeError('this is null or not defined');
//       }

//       var O = Object(this);


//       // Step 13.
//       return O;
//     }
//   });
// }

// Object.defineProperty(Array.prototype, 'flat', {
//   value: function (depth) {
//     const _dh = depth ? depth : 1;

//     // Steps 1-2.
//     if (this == null) {
//       throw new TypeError('this is null or not defined');
//     }

//     var O = Object(this);
//     var nums = O;
//     var len = nums.length;

//     // Step 13.
//     return O;
//   }
// });

// reduce + 递归
Array.prototype.fakeFlat = function (num = 1) {
  if (!Number(num) || Number(num) < 0) {
    return this;
  }
  let arr = [].concat(this);
  return num > 0
    ? arr.reduce(
      (pre, cur) =>
        pre.concat(Array.isArray(cur) ? cur.fakeFlat(--num) : cur),
      []
    )
    : arr.slice();
};
if (!Array.prototype.flatF) {
  Array.prototype.flatF = function(depth = 1) {
    return this.filter(a => !!a).reduce(function (flatF, toFlatten) {
      return flatF.concat((Array.isArray(toFlatten) && toFlatten.length  && (depth>1)) ? toFlatten.filter(a => !!a).flatF(--depth) : toFlatten);
    }, []);
  };
}
const arr = [1, [3, 4], , ,[1, 34, 45, 3, ,  ,43], , 23, 34, []];
console.log( arr.flatF())
// console.log(arr.filter(a => !!a))
