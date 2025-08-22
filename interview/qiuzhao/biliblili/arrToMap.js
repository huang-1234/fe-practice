
/**
 * @desc
 * 这个函数用于查找数组中出现频率最高的前 k 个元素。

主要步骤：
1. 创建所有元素的频率映射
2. 重复查找并移除最大频率元素 k 次
3. 通过包含与第 k 个最高频率相同的所有元素来处理并列情况
4. 打印结果

注意：该逻辑在处理并列情况和输出格式方面存在一些问题。
 * @param {number} nums
 * @param {number} k
 * @returns
 */
function counter(nums, k) {
  const len = nums.length;
  if (len <= 1) {
    return -1;
  }
  const map = new Map();
  for (let i = 0;i < len;i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1);
    }
  }
  let max = Number.MIN_VALUE;
  let key;
  let ans = [];
  for (let i = 0;i < k;i++) {
    let kMax = Number.MIN_VALUE;
    let kKey;
    if (map.size) {
      map.forEach((value, key) => {
        if (value > kMax) {
          kMax = value;
          kKey = key;
        }
      });
      if (i < k - 1) {
        map.delete(kKey);
      } else {
        max = kMax;
        key = kKey;
        ans.push(kKey);
        map.delete(kKey);
      }
      map.forEach((value, key) => {
        if (value === max) {
          ans.push(key)
        }
      });
    } else {
      print('-1 -1');
      return;
    }
    ans.push(max)
  };
  for (let i = 0, len = ans.length;i < len;i++) {
    print(ans[i])
  }
}
const nums = [1, 3, 2, 3, 2, 2, 1, 2];
counter(nums, 1)

// const map = new Map();
// map.set(4, 2).set(5, 5).set(6, 6)
// map.set(4, map.get(4) + 1)
// map.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// })