// 仅供参考
function Random() {
  this.nextDouble = () => {
    return Math.random();
  }
}
/**
 * 构造函数
 * @param {number[]} nums
 */
const Solution = function (nums) {
  // 缓存 nums 数组
  this.nums = nums;
  // 缓存原始长度
  this.n = nums.length;
  // 缓存一个随机数生成器
  this.rand = new Random();
};

/**
* 重置，返回原始数组
* @return {number[]}
*/
Solution.prototype.reset = function () {
  // 直接返回原数组即可
  return this.nums;
};

/**
* 随机打乱 nums 数组
* @return {number[]}
*/
Solution.prototype.shuffle = function () {
  // 复制一个新数组，避免修改原数组
  const copy = this.nums.slice();
  // 遍历数组
  for (let i = 0;i < this.n;i++) {
    // 生成一个 [i, n-1] 区间内的随机整数
    const r = i + Math.floor(this.rand.nextDouble() * (this.n - i));
    // 交换 copy[i] 和 copy[r]
    const temp = copy[i];
    copy[i] = copy[r];
    copy[r] = temp;
  }
  // 返回新数组
  return copy;
};

// origin

// 洗牌算法的时间复杂度是 O(N)，而且逻辑很简单，关键在于让你证明为什么这样做是正确的。排序算法的结果是唯一可以很容易检验的，但随机乱置算法不一样，乱可以有很多种，你怎么能证明你的算法是「真的乱」呢？

// 分析洗牌算法正确性的准则：产生的结果必须有 n! 种可能。这个很好解释，因为一个长度为 n 的数组的全排列就有 n! 种，也就是说打乱结果总共有 n! 种。算法必须能够反映这个事实，才是正确的。

// 有了这个原则再看代码应该就容易理解了：

// 对于 nums[0]，我们把它随机换到了索引 [0, n) 上，共有 n 种可能性；

// 对于 nums[1]，我们把它随机换到了索引 [1, n) 上，共有 n - 1 种可能性；

// 对于 nums[2]，我们把它随机换到了索引 [2, n) 上，共有 n - 2 种可能性；

// 以此类推，该算法可以生成 n! 种可能的结果，所以这个算法是正确的，能够保证随机性。
