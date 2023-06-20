const lunch = {
  one: 0,
  tow: 1,
  three: 2,
}
const lunchSc = lunch.three;
function excFindBound(leftBoundFn, rightBoundFn, lunchSc, target = 99) {
  let td = [1, 3, 3, 3, 6, 5, 10, 10, 10, 13, 13, 14, 18, 99, 99, 99, 99, 100, 100];
  console.log(`nums length is ${td.length}, we choose the ${lunchSc} to exc`);
  const [left_b, right_b] = [leftBoundFn(td, target), rightBoundFn(td, target)];
  console.log(`left_b is ${left_b}. right_b is ${right_b}`);
  return [left_b, right_b];
}
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

  if (lunchSc === lunch.one) {
    excFindBound(left_bound, right_bound, lunchSc);
  }
}

{
  let cnt = 10;
  const left_bound = function (nums, target) {
    // 搜索区间为 [left, right]
    let left = 0, right = nums.length - 1;
    while (left <= right) {
      if (--cnt < 0) {
        break;
      }
      const mid = left + Math.floor((right - left) / 2);
      // 如果要寻找左侧边界，有两种情况需要更新 right
      // 当 nums[mid] == target，因为要找到最左边的下标，所以要把 right 更新到 mid - 1
      // 当 nums[mid] > target，因为 target 只可能出现在左侧，所以要把 right 更新到 mid - 1
      if (nums[mid] == target) {
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else if (nums[mid] > target) {
        right = mid - 1;
        // 当 nums[mid] < target，因为 target 只可能出现在右侧，所以要把 left 更新到 mid + 1
      }
    }
    // 最后改成返回 left - 1
    if (left < 0 || left >= nums.length) {
      return -1;
    }
    return nums[left] == target ? left : -1;
  }
  // 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
  // 本代码还未经过力扣测试，仅供参考，如有疑惑，可以参照我写的 java 代码对比查看。

  const right_bound = function (nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] < target) {
        left = mid + 1;
      } else if (nums[mid] == target) {
        // 这里改成收缩左侧边界即可
        left = mid + 1;
      } else if (nums[mid] > target) {
        right = mid - 1;
      }
    }
    // 最后改成返回 left - 1
    if (left - 1 < 0 || left - 1 >= nums.length) {
      return -1;
    }
    return nums[left - 1] == target ? (left - 1) : -1;
  };

  if (lunchSc === lunch.tow) {
    excFindBound(left_bound, right_bound, lunchSc);
  }
}

// std
{
  // 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
  // 本代码还未经过力扣测试，仅供参考，如有疑惑，可以参照我写的 java 代码对比查看。

  const binary_search = function (nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] < target) {
        left = mid + 1;
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else if (nums[mid] == target) {
        // 直接返回
        return mid;
      }
    }
    // 直接返回
    return -1;
  }

  const left_bound = function (nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] < target) {
        left = mid + 1;
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else if (nums[mid] == target) {
        // 别返回，锁定左侧边界
        right = mid - 1;
      }
    }
    // 判断 target 是否存在于 nums 中
    if (left < 0 || left >= nums.length) {
      return -1;
    }
    // 判断一下 nums[left] 是不是 target
    return nums[left] == target ? left : -1;
  }

  const right_bound = function (nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] < target) {
        left = mid + 1;
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else if (nums[mid] == target) {
        // 别返回，锁定右侧边界
        left = mid + 1;
      }
    }
    // 判断 target 是否存在于 nums 中
    // if (left - 1 < 0 || left - 1 >= nums.length) {
    //     return -1;
    // }

    // 由于 while 的结束条件是 right == left - 1，且现在在求右边界
    // 所以用 right 替代 left - 1 更好记
    if (right < 0 || right >= nums.length) {
      return -1;
    }
    return nums[right] == target ? right : -1;
  }

  if (lunchSc === lunch.three) {
    excFindBound(left_bound, right_bound, lunchSc);
  }
}
