/**
 * @param {number} n
 * @return {number}
 */
const n = 1;
(function (n) {
  const sqrtNumDec = parseInt(Math.sqrt(n))
  console.log(sqrtNumDec);
  const sqArr = new Array(sqrtNumDec);
  for (let idx = 0, arrLen = sqArr.length;idx < arrLen;idx++) {
    const arrValue = sqArr[idx] = idx * idx;
    console.log(arrValue);
  }
  console.log(sqArr);
})(n);

console.log(16*8);
