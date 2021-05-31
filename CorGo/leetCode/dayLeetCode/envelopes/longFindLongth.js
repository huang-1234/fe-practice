

//#region 
/**
 * @param {number[][]} envelopes
 * @return {number}
 */

envelopes = [[5, 4], [6, 4], [6, 7], [2, 3]];

var maxEnvelopes = function(envelopes) {
  let arr = envelopes.sort((x,y) => {
    return x[0]-y[0]
  });
  let re = arr.map((currentArr) => {
    return currentArr;
  });
};



let LongthArr = function (array) {
  let lengthResult = [];
  for (let i = 0;i < array.length;i++) {
    let resArr = [];
    const firstValue = array[i];
    resArr.push(firstValue);
    for (let i2 = i + 1;i2 < array.length;i2++) {
      // 使用双指针
      let frontValue = firstValue;
      let endValue = array[i2];
      if (frontValue <= endValue) {
        resArr.push(endValue);
        // 双指针都向前推进
        frontValue = endValue;
        endValue = array[++i2];
      } else {
        // 双指针都向前推进
        frontValue = endValue;
        endValue = array[++i2];
      }
    }
    // 取出每一个递增数组的长度并放入到长度数组中去
    lengthResult.push(resArr.length)
  }
  let maxValue = lengthResult[0]
  for (let i = 1;i < lengthResult.length;i++) {
    let nextValue = lengthResult[i];
    maxValue = maxValue > nextValue ? maxValue : nextValue;
  }
  return maxValue;
}
let e = [1, 2, 3, 4, 5, 8, 2, 3, 4, 5, 6, 7];
let out = LongthArr(e);
console.log(out)


/**
 * @param {number[]} nums
 * @return {number}
 */

/* 
var findLengthOfLCIS = function(array) {
    let lengthResult = [];
    for (let i = 0;i < array.length;i++) {
        let resArr = [];
        const firstValue = array[i];
        resArr.push(firstValue);

        let frontValue = firstValue;
        let endValue;
        for (let i2 = i + 1,endValue = array[i2];i2 < array.length;) {
            // 使用双指针
            
            if (frontValue < endValue) {
                resArr.push(endValue);
                // 双指针都向前推进
                frontValue = endValue;
                endValue = array[++i2];
            } else {
                // 双指针都向前推进
                frontValue = endValue;
                endValue = array[++i2];
            }
        }
        // 取出每一个递增数组的长度并放入到长度数组中去
        lengthResult.push(resArr.length)
  }
  let maxValue = lengthResult[0]
  for (let i = 1;i < lengthResult.length;i++) {
    let nextValue = lengthResult[i];
    maxValue = maxValue > nextValue ? maxValue : nextValue;
  }
  return maxValue;
};
 */
//#endregion

let FindLongth = function (numArr) {
  // 这里是保存每次遍历数组保存的结果，如果需要节约内存，可以直接使用numArr前面的部分存储结果值，
  //但是本着纯函数的原则，还是算了吧
  if (0===numArr.length) {
    return 0;
  }
  let start = -1;
  let max = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i]<numArr[1+i]) {
      continue;
    } else {
      max = i - start > max ? i - start : max;
      start = i;
    }
  }
  return max;
}
// 龙哥写的求最长子序列
