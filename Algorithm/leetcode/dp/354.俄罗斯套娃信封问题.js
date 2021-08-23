/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
  if (nums.length === 0) return 0;
  let result = [nums[0]];
  for (let i = 1; i < nums.length; ++i) {
// 如果当前数值大于已选结果的最后一位，则直接往后新增，若当前数值更小，则直接替换前面第一个大于它的数值
    if (nums[i] > result[result.length - 1]) {
      result[result.length] = nums[i];
    } else {
      // 二分查找：找到第一个大于当前数值的结果进行替换
      let left = 0,
        right = result.length - 1;
      while (left < right) {
        let mid = ((left + right) / 2) | 0
        if (result[mid] < nums[i]) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      // 替换当前下标
      result[left] = nums[i];
    }
  }
  return result.length;
};
var maxEnvelopes = function(envelopes) {
  const compare = (a, b) => a[0] - b[0];
  envelopes.sort(compare);
  const eLen = envelopes.length;
  const eSet = new Set();
  const towIndex = [];
  // 去重
  for (let i = 0; i < eLen; i++){
    if (eSet.has(envelopes[i][0])) {
      continue;
    } else {
      towIndex.push(envelopes[i][1]);
      eSet.add( envelopes[i][0] )
    }
  }
  // towIndex 对这个进行最长递增子序列
  const findLongth = (towIndex) => {
    const nLen = towIndex.length;
    const res = [];
    res.push(towIndex[0]);
    for (let i = 1;i < nLen;i++){
      if (res[res.length - 1] < towIndex[i]) {
        res.push(towIndex[i])
      } else {
        let left = 0; let right = res.length - 1;
        const targetNum = towIndex[i];
        while (left < right) {
          // const mid = left + Math.floor((right - left / 2));
          const mid = Math.floor((left + right) / 2);
          if (towIndex[mid] < targetNum) {
            left = mid+1
          } else {
            right = mid;
          }
        }
        res[left] = targetNum;
      }

    }
    return res.length;
  }
};
// @lc code=end

