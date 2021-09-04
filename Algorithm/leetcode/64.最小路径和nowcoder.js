
// node
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  ouput: process.stdout
})
let inArr = []
rl.on('line', line => {
  if (!line) return
  inArr.push(line.trim())
  let mn = inArr[0].split(' ').map(e => +e)
  let m = mn[0]
  let n = mn[1]
  if (inArr.length === m + 1) {
    let arr = []
    for (let i = 0;i < m;i++) {
      arr[i] = inArr[i + 1].split(' ').map(e => +e)
    }
    console.log(minPathSum(arr))

  }
})

var minPathSum = function (grid) {
  const m = grid.length,
    n = grid[0].length
  for (let i = m - 1;i >= 0;i--) {
    for (let j = n - 1;j >= 0;j--) {
      if (i + 1 < m && j + 1 < n) {
        grid[i][j] += Math.min(grid[i + 1][j], grid[i][j + 1])
      } else if (i + 1 < m) {
        grid[i][j] += grid[i + 1][j]
      } else if (j + 1 < n) {
        grid[i][j] += grid[i][j + 1]
      }
    }
  }
  return grid[0][0]
};

// v8

let firstRow = readline().split(" ");
let m = firstRow[0];//行数
let n = firstRow[1];//列数

let arr = [];
for (let i = 0;i < m;i++) {
  arr[i] = readline().split(" ").map(Number);
}

if (m == 1 || n == 1) {
  print(arr[m - 1][n - 1]);
} else {
  //存储数组中每个元素路径的最小值
  let minArr = [];
  for (let i = 0;i < m;i++) {
    let temp = [];
    for (let j = 0;j < n;j++) {
      temp.push(0);
    }
    minArr.push(temp);
  }

  let minSum = 0;

  // 从下往上遍历（行）
  for (let i = m - 1;i >= 0;i--) {
    // 从右到左遍历（列）
    for (let j = n - 1;j >= 0;j--) {
      if (i == m - 1 && j == n - 1) {
        minArr[i][j] = arr[i][j];
      } else if (i == m - 1) {
        minArr[i][j] = minArr[i][j + 1] + arr[i][j];
      } else if (j == n - 1) {
        minArr[i][j] = minArr[i + 1][j] + arr[i][j];
      } else {
        if (minArr[i + 1][j] > minArr[i][j + 1]) {
          minArr[i][j] = minArr[i][j + 1] + arr[i][j];
        } else {
          minArr[i][j] = minArr[i + 1][j] + arr[i][j];
        }
      }
    }
  }
  print(minArr[0][0])
}