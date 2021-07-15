function mergeSort(arr) {
  const Len = arr.length;
  if (Len < 2) {
    return arr;
  }
  const L = 0 , R = Len;
  const mid = Math.floor(Len/2)
  let arrL = arr.slice(L,mid) , arrR = arr.slice(mid,R)
  return merge(mergeSort(arrL), mergeSort(arrR))
}

function merge(arrLeft, arrRight) {
  const arrLeftLen = arrLeft.length, arrRightLen = arrRight.length;
  const arrResLen = arrLeftLen + arrRightLen
  const arrRes = new Array(arrResLen);
  let i = 0, indexL = 0, indexR = 0;
  for (;i < arrResLen && indexL < arrLeftLen && indexR < arrRightLen;){
    if (arrLeft[indexL] < arrRight[indexR]) {
      arrRes[i++] = arrLeft[indexL++];
    } else if (arrLeft[indexL] > arrRight[indexR]) {
      arrRes[i++] = arrRight[indexR];
    } else {
      arrRes[i++] = arrLeft[indexL++];arrRes[i++] = arrRight[indexR];
    }
    if (i===arrResLen) {
      return arrRes;
    }
    while (indexL < arrLeftLen) arrRes[i++] = arrLeft[indexL++];
    while (indexR < arrRightLen) arrRes[i++] = arrLeft[indexR++];
    return arrRes;
  }
}

console.log(mergeSort([12,12,43,5,23,64]))