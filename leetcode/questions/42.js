{
  /**
   * @param {number[]} height
   * @return {number}
   */

  function maxList(height, isPre = true) {
    const hLen = height.length;
    let curMax = Number.MIN_SAFE_INTEGER;
    const res = new Array(hLen).fill(curMax);
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
  const trap = function (height) {
    const preMax = maxList(height).res;
    const sufMax = maxList(height, false).res;
    const hLen = height.length;
    let res = 0;
    for (let i = 1;i < hLen - 1;i++) {
      const ele = height[i];
      const sideMin = Math.min(preMax[i - 1], sufMax[i + 1]);
      if (sideMin > ele) {
        res = res + sideMin - ele;
      }
    }
    return res;
  };
}

{
  const doublePointer = function (height) {
    var left = 0, right = height.length - 1;
    var l_max = 0, r_max = 0;

    var res = 0;
    while (left < right) {
      l_max = Math.max(l_max, height[left]);
      r_max = Math.max(r_max, height[right]);

      // res += min(l_max, r_max) - height[i]
      if (l_max < r_max) {
        res += l_max - height[left];
        left++;
      } else {
        res += r_max - height[right];
        right--;
      }
    }
    return res;
  };

  const td = [0,1,0,2,1,0,1,3,2,1,2,1]
  console.log(doublePointer(td))

}
