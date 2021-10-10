function getNMarr() {
  const [n, m] = read_line().trim().split(" ").map(Number)
  const arr = new Array(n).fill(0).map((val) => new Array(n))
  for(let i = 0; i < m; i++) {
    const [num1,num2] = read_line().trim().split(" ").map(Number)
    arr[num1 - 1][num2 - 1] = 1;
    arr[num2-1][num1-1] = 1;
  }
  return [n, m, arr]
}

function getNMarr() {
  const [n, m] = [5, 3];
  const arr = new Array(n).fill(0).map((val) => new Array(n))
  arr[0][1] = 1;
  arr[1][2] = 1;
  arr[3][4] = 1;

  // arr[1][0] = 1;
  // arr[2][1] = 1;
  // arr[4][3] = 1;

  // const arr = [
  //   [1, 2],
  //   [2, 3],
  //   [4, 5]
  // ];
  return [n, m, arr]
}

function solute() {
  const [n, m, arr] = getNMarr();
  let ans = 0;
  const queue = [];
  for (let i = 0;i < n; i++){
    for (let j = 0; j < n; j++){
      if (arr[i][j]) {
        queue.push([i, j]);
        break;
      }
    }
  }
  while (queue.length) {
    const cur = queue.shift();
    const [x, y] = cur;
    if (x >= 0 && x <= m - 1 && y >= 0 && y <= m - 1) {
      if (x-1 >=0 && arr[x - 1][y]) {
        ans++;
        queue.push([x-1,y])
      }
      if (x+1<=m-1 && arr[x + 1, y]) {
        ans++;
        queue.push([x - 1, y - 1]);
      }
      if (y-1>=0 && arr[x][y - 1]) {
        ans++;
        queue.push([x, y-1])
      }
      if (y+1<=m-1 && arr[x][y + 1]) {
        ans++;
        queue.push([x, y+1])
      }
    }
  }
  return ans;
}
console.log(solute())
// print(solute())
