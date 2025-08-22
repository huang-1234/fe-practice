
function getTowSum(arr) {
  const len = arr.length;
  let sum = 0;
  for (let i = 0;i < len - 1;i++) {
    const minus = arr[i] - arr[i + 1]
    const absMinus = minus > 0 ? minus : -minus;
    sum += absMinus;
  }
  return sum;
}

function getMaxSum(n, arr) {
  let flag = true;
  const res = []
  arr.sort((a, b) => b - a); // 降序排列
  let maxSum = Number.MIN_VALUE;


  function trackback(arr, index, res) {
    if (index >= n) {
      return;
    }
    if (res.length === n) {
      if (getTowSum(res) > maxSum) {
        maxSum = getTowSum(res);
      }
    }

    for (let i = 0;i < n;i++) {
      if (flag) {
        res.push(arr[i]);
        trackback(arr, index + 1, res);
        flag = !flag;
        res.pop();
      } else {
        res.push(arr[n - 1 - i]);
        trackback(arr, index + 1, res);
        flag = !flag;
        res.pop();
      }

    }
    return maxSum;
  }
  return trackback(arr, 0, res);
}


// let num = parseInt(readline().trim());
// let arr = []
// while(num--){
//   let towNums = readline().trim().split(' ');
//   arr.push(parseInt(towNums[0]), parseInt(towNums[1]))
// }
const num = 3;
let arr = [
  [12, 45],
  [26, 889],
  [78, 653]
]
console.log(getMaxSum(num, arr))
