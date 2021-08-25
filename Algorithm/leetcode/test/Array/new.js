
const nLen = 8, simeSum = 5;
const dp = new Array(nLen).fill(0).map(v => new Array(simeSum + 1, false));

for (let i = 0;i < nLen;i++) {
  for (let j = 0;j < 6;j++){
    const ele = dp[i][j];
    console.log(ele);
  }
}