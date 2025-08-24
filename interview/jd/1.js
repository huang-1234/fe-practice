const k = 3;
let arrs = [
  [1000, 100],
  [100, 100],
  [200, 700]
]

// function needMinV(k, arrs) {
//   if (k <= 0) {
//     return 0;
//   }
//   const len = k;
//   arrs.sort((a, b) => a[0] - b[0]);
//   let needVal = Number.MIN_VALUE

//   const dp = new Array(len + 1).fill(0);
//   dp[0] = 0
//   for (let i = 1;i < len;i++) {
//     dp[i] = Math.min(
//       dp[i] - arrs[1][i-1],
//       dp[i - 1] + arrs[0][i]
//     )
//   }
//   return dp[k]


// }


function needMinV() {
  
}

console.log(needMinV(k, arrs))