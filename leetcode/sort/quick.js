// 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码还未经过力扣测试，仅供参考，如有疑惑，可以参照我写的 java 代码对比查看。
function swap(nums, lo, hi) {
  const t = nums[lo];
  nums[lo] = nums[hi];
  nums[hi] = t;
}
function partition(nums, lo, hi) {
  let pIdx = lo;
  let pivot = nums[pIdx];
  swap(nums, pIdx, hi)
  let [start, end] = [lo, hi];
  console.log('p', start, end, hi)
  while (start < end) {

    while (start < end && nums[start] < pivot) {
      start++;
    }
    while (start < end && nums[end] > pivot) {
      end--;
    }

    if (start < end) {
      swap(nums, start, end)
    }
  }
  swap(nums, start, end)

  return start;
}
let cnt = 10;
const sort = function(nums, lo, hi) {
  // 通过交换元素构建分界点 p
  const p = partition(nums, lo, hi);
  console.log('sort', p);
  if (--cnt < 0) {
    return 0
  }

  sort(nums, lo, p - 1);
  sort(nums, p + 1, hi);
  return nums;
};


let td = [1, 43, 3, 345, 34, 4564, 23, 43, 556];

console.log(sort(td, 0, td.length - 1));
console.log(td)

