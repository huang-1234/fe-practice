// 无序列表最关键的一句在于： 数组 d[i]表示长度为 i 的最长上升子序列的末尾元素的最小值，即在数组 1,2,3,4,5,6中长度为3的上升子序列可以为 1,2,3也可以为 2,3,4等等但是d[3]=3，即子序列末尾元素最小为3。

// 无序列表解释清了数组d的含义之后，我们接着需要证明数组d具有单调性，即证明i<j时，d[i]<d[j]，使用反证法，假设存在k<j时，d[k]>d[j]，但在长度为j，末尾元素为d[j]的子序列A中，将后j-i个元素减掉，可以得到一个长度为i的子序列B，其末尾元素t1必然小于d[j]（因为在子序列A中，t1的位置上在d[j]的后面），而我们假设数组d必须符合表示长度为 i 的最长上升子序列的末尾元素的最小值，此时长度为i的子序列的末尾元素t1<d[j]<d[k]，即t1<d[k]，所以d[k]不是最小的，与题设相矛盾，因此可以证明其单调性

// 无序列表证明单调性有两个好处：1.可以使用二分法；2.数组d的长度即为最长子序列的长度；

// （大家如果觉得有帮助，麻烦点个赞，顶我上去，让更多的人看到~）
class Solution {
  public int lengthOfLIS(int[] nums) {
      int len = 1, n = nums.length;
      if (n == 0) {
          return 0;
      }
      int[] d = new int[n + 1];
      d[len] = nums[0];
      for (int i = 1; i < n; ++i) {
          if (nums[i] > d[len]) {
              d[++len] = nums[i];
          } else {
              int left = 1, right = len, pos = 0; // 如果找不到说明所有的数都比 nums[i] 大，此时要更新 d[1]，所以这里将 pos 设为 0
              while (left <= right) {
                  int mid = (left + right) >> 1;
                  if (d[mid] < nums[i]) {
                      pos = mid;
                      left = mid + 1;
                  } else {
                      right = mid - 1;
                  }
              }
              d[pos + 1] = nums[i];
          }
      }
      return len;
  }
}
