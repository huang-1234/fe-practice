/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 *
 * [1011] 在 D 天内送达包裹的能力
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

function needDaysByCapacity(weights, capacity) {
  const wLen = weights.length;
  let days = 1;
  for (let i = 0;i < wLen; i++) {
    let curWeight = 0
    if (curWeight + weights[i] > capacity) {
      days++
      curWeight = 0
    }
    curWeight += weights[i]
    
  }
  return days
}
// const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(needDaysByCapacity(weights, 10))

var shipWithinDays = function (weights, days) {
  let low = Math.max(...weights)
  let hight = weights.reduce((pre, cur) => pre + cur, 0) + 1;
  while (low < hight) {
    const mid = low + ((hight - low) / 2) | 0
    if (needDaysByCapacity(weights, mid) <= days) {
      hight = mid
    } else {
      low = mid + 1;
    }
  }
  return low
};

// var shipWithinDays = function (weights, days) {
//   // 确定二分查找左右边界
//   let left = Math.max(...weights), right = weights.reduce((a, b) => a + b);
//   while (left < right) {
//     const mid = Math.floor((left + right) / 2);
//     //  need 为需要运送的天数
//     // cur 为当前这一天已经运送的包裹重量之和
//     let need = 1, cur = 0;
//     for (const weight of weights) {
//       if (cur + weight > mid) {
//         need++;
//         cur = 0;
//       }
//       cur += weight;
//     }

//     if (need <= days) {
//       right = mid;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return left;
// };
// @lc code=end

