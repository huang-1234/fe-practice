{

  // 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
  // 本代码还未经过力扣测试，仅供参考，如有疑惑，可以参照我写的 java 代码对比查看。

  const left_bound = function (nums, target) {
    let [left, right] = [0, nums.length];

    while (left < right) { // 注意
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] == target) {
        right = mid;
      } else if (nums[mid] > target) {
        right = mid; // 注意
      } else if (nums[mid] < target) {
        left = mid + 1;
      }
    }
    // 如果索引越界，说明数组中无目标元素，返回 -1
    if (left < 0 || left >= nums.length) {
      return -1;
    }
    // 判断一下 nums[left] 是不是 target
    return nums[left] == target ? left : -1;
  }

  const right_bound = function (nums, target) {
    let [left, right] = [0, nums.length];

    while (left < right) { // 注意
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] == target) {
        left = mid + 1;
      } else if (nums[mid] < target) {
        left = mid + 1; // 注意
      } else if (nums[mid] > target) {
        right = mid;
      }
    }
    // 判断一下 nums[left] 是不是 target
    return nums[left - 1] == target ? left - 1 : -1;
  }



}

{
  const left_bound = function (nums, target) {
    // 搜索区间为 [left, right]
    let left = 0, right = nums.length - 1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      // 如果要寻找左侧边界，有两种情况需要更新 right
      // 当 nums[mid] == target，因为要找到最左边的下标，所以要把 right 更新到 mid - 1
      // 当 nums[mid] > target，因为 target 只可能出现在左侧，所以要把 right 更新到 mid - 1
      if (nums[mid] == target) {
        right = mid - 1;
      } else if (nums[mid] > target) {
        right = mid - 1;
        // 当 nums[mid] < target，因为 target 只可能出现在右侧，所以要把 left 更新到 mid + 1
      } else {
        left = mid + 1;
      }
    }
  }
  // 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
  // 本代码还未经过力扣测试，仅供参考，如有疑惑，可以参照我写的 java 代码对比查看。

  const right_bound = function (nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] < target) {
        left = mid + 1;
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else if (nums[mid] == target) {
        // 这里改成收缩左侧边界即可
        left = mid + 1;
      }
    }
    // 最后改成返回 left - 1
    if (left - 1 < 0 || left - 1 >= nums.length) {
      return -1;
    }
    return nums[left - 1] == target ? (left - 1) : -1;
  };
  let td = [1, 3, 3, 3, 6, 5, 10, 10, 10, 13, 13, 14, 18, 99, 99, 99, 99, 100, 100];

  console.log(left_bound(td, 99), td.length, '===');
  console.log(right_bound(td, 99))

}