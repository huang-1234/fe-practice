{
  // let arr = new Array(3)
  // for (let i = 0;i < 3;i++){
  //   arr[i] = new Array(3).fill(0)
  // }
  // arr[1][1] = 1
  // arr[1][2] = 2
  // console.log(arr)
}

/*
{
  // 二维数组
  const len = 10;
  const dp = new Array(len).fill(0).map(() => new Array(2).fill(0));
  dp[5][1] = 99999;
  console.log(dp)
}
 */
{
  // // 三维数组
  // const x = 5, y = 5, z = 5;
  // const dp = new Array(x).fill(0).map(() => new Array(y).fill(0).map(() => new Array(z).fill(0)));
  // dp[1][2][3] = 99999;
  // console.log(dp)
  const prices  = [3,3,5,0,0,3,1,4]
  const len = prices.length, k = 2, status = 2;
  const dp = new Array(len).fill(0).map(() => new Array(k+1).fill(0).map(() => new Array(status).fill(0)))
  dp[1][2][1] = 99999999;
  dp[2][2][1] = 99999999;
  console.log(dp)
}