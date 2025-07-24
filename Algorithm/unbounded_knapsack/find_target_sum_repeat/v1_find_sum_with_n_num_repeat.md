### 解题思路（回溯法实现具体组合）

**问题本质**：完全背包问题的具体组合输出（数字可重复使用）

* **关键区别**：需要输出所有具体组合而非仅计数
* **组合去重**：`[1,2]`和`[2,1]`视为相同组合，需保证非递减排列

**算法选择**：深度优先搜索（DFS）回溯法

1. **排序预处理**：升序排列以启用剪枝优化
2. **DFS核心逻辑**：
   - `startIndex` 控制选择范围（避免反向组合）
   - 当前数字可重复选择（递归时不 `+1` ）
   - 路径和等于目标时记录结 果
3. **剪枝优化**：
   - 当前和超过目标时终止路径
   - 从 `startIndex` 开始遍历避免重复组合

### JS代码实现

```javascript
const combinationSum = (nums, target) => {
    nums.sort((a, b) => a - b); // 升序排序用于剪枝
    const result = [];

    const dfs = (startIndex, currentPath, currentSum) => {
        if (currentSum === target) {
            result.push([...currentPath]); // 深拷贝有效组合
            return;
        }

        for (let i = startIndex; i < nums.length; i++) {
            // 剪枝：超过目标值停止（排序后后续更大）
            if (currentSum + nums[i] > target) break;

            // 递归选择当前数字
            currentPath.push(nums[i]);
            dfs(i, currentPath, currentSum + nums[i]); // 注意是i不是i+1（可重复使用）
            currentPath.pop(); // 回溯撤销选择
        }
    };

    dfs(0, [], 0);
    return result;
};
```

### 关键特性说明


| 代码片段                          | 功能说明                                     |
| --------------------------------- | -------------------------------------------- |
| `nums.sort((a,b)=>a-b)`           | 先排序确保后续剪枝有效 (`break` 跳过更大值)  |
| `for (let i = startIndex; ...)`   | 避免生成`[2,1]` 类重复组合（始终保持非递减） |
| `dfs(i, ...)` 而非 `dfs(i+1,...)` | `i` 允许重复选择当前数字， `i+1` 则禁止      |
| `currentPath.push/pop`            | 经典回溯操作（栈结构保存当前路径）           |
| `[...currentPath]`                | 深拷贝当前组合（避免后续回溯修改结果）       |

### 测试案例

```javascript
console.log(combinationSum([2, 3, 5], 8));
// 输出: [[2,2,2,2], [2,3,3], [3,5]]

console.log(combinationSum([2], 1));
// 输出: [] （无解）

console.log(combinationSum([1], 2));
// 输出: [[1,1]]

console.log(combinationSum([1, 2], 3));
// 输出: [[1,1,1], [1,2]]（注意无[2,1]）

console.log(combinationSum([3, 6, 7], 7));
// 输出: [[7], [3,3,1]?] → 实际: [[7]]（注意3>7停止）
```

### 执行过程解析（以[2, 3], 4为例）

```
startIndex=0, path=[], sum=0
 选择2 → path=[2], sum=2 → 递归
   startIndex=0, path=[2], sum=2
   选择2 → path=[2,2], sum=4 → 满足 → 记录[[2,2]]
   选择3 → 2+3=5>4 → break
 选择3 → path=[3], sum=3 → 递归
   startIndex=1, path=[3], sum=3
   选择3 → 3+3=6>4 → break
最终结果: [[2,2]]
```

### 优化方向

1. **前端性能优化**：

```javascript
   // 大数据量时使用迭代替代递归
   const iterativeDFS = () => {
       const stack = [
           [0, [], 0]
       ];
       while (stack.length) {
           const [start, path, sum] = stack.pop();
           // ... 类似逻辑
       }
   };
```

2. **剪枝增强**：

```javascript
   // 增加剩余和检查
   const remaining = target - currentSum;
   if (nums[i] > remaining) break;
```

3. **结果去重**：

```javascript
   // 当输入含重复元素时（本题不需要）
   if (i > startIndex && nums[i] === nums[i - 1]) continue;
```

此解法符合Leetcode 39题标准要求，在允许数字复用的前提下，高效输出所有不重复组合。运行时间O(n^2)，空间复杂度O(n)。
