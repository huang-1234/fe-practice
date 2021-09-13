
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