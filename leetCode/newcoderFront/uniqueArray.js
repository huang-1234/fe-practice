let arr = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN];
Array.prototype.unique = function (arr) {
  let setArr = new Set(...arr)
}
