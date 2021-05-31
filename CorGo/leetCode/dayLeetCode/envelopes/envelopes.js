

//#region 
/**
 * @param {number[][]} envelopes
 * @return {number}
 */



let FindLongth = function (numArr) {
  // 这里是保存每次遍历数组保存的结果，如果需要节约内存，可以直接使用numArr前面的部分存储结果值，
  //但是本着纯函数的原则，还是算了吧
  if (0===numArr.length) {
    return 0;
  }
  let start = -1;
  let max = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i]<=numArr[1+i]) {
      continue;
    } else {
      max = i - start > max ? i - start : max;
      start = i;
    }
  }
  return max;
}

let envelopes = [[5, 4], [6, 4], [6, 7], [2, 3]];

var maxEnvelopes = function(envelopes) {
  let arr = envelopes.sort((x,y) => {
    return x[0]-y[0]
  });
  let length = arr.length;
  let numArr = [length]
  for (let i = 0;i < length;++i){
    numArr[i] = arr[i][1];
  }
  return FindLongth(numArr)
};
let out = maxEnvelopes(envelopes)
console.log(out);
// let e = [1, 2, 3, 4, 5, 8, 2, 3, 4, 5, 6, 7];
// let out = LongthArr(e);
// console.log(out)