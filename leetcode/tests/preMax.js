function preMax(height, isPre = true) {
  const hLen = height.length;

  const res = new Array(hLen).fill(isPre ? height[0] : height[hLen - 1]);
  let curMax = res[0];
  for (let i = 0;i < hLen;i++) {

    const idx = isPre ? i : hLen - i - 1;
      const cur = height[idx];
    if (cur > curMax) {
          res[idx] = cur;
          curMax = cur;
      } else {
          res[idx] = curMax;
      }
  }
  return {
    res,
    curMax
  };
}

let testData = [4,2,3]

console.log(preMax(testData, false));
{
  // var trap = function(height) {
  //   let res = 0;
  //   const stack = [];
  //   // 单调递减栈
  //   for(let i = 0; i < height.length; i++) {
  //       while(stack.length && height[i] > height[stack[stack.length - 1]]) {
  //          const index = stack.pop();
  //          if(!stack.length) break;
  //           const left = stack[stack.length - 1]
  //          res += (Math.min(height[left], height[i]) - height[index]) * (i - left - 1);
  //       }
  //       stack.push(i)
  //   }
  //   return res;
  // };
}