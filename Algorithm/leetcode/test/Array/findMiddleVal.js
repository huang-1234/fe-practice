function findMiddleVal(arr) {
  let middleVal = null;
  const len = arr.length;
  if (0 === len % 2) {
    middleVal = (arr[len / 2 - 1] + arr[len / 2]) / 2;
  } else {
    middleVal = arr[(len - 1) / 2] ;
  }
  return middleVal;
}

const nums = [1, 2, 3, 4, 5, 101, 102, 103, 104,105];
console.log(findMiddleVal(nums));