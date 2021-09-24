/* 请实现有重复数字的升序数组的二分查找。
输出在数组中第一个大于等于查找值的位置，如果数组中不存在这样的数(指不存在大于等于查找值的数)，则输出数组长度加一。 */
class Solution {
  public:
    /**
     * 二分查找
     * @param n int整型 数组长度
     * @param v int整型 查找值
     * @param a int整型vector 有序数组
     * @return int整型
     */
    int upper_bound_(int n, int v, vector<int>& a) {
  // write code here
  if (v > a[n - 1]) {
    return n + 1;
  }
          int left = 0, right = n;
  while (left < right) {
              int mid = left + (right - left) / 2;
    if (a[mid] < v) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left + 1;
}
  };

/* 输入
5,4,[1,2,4,4,5]
输出
3
说明
输出位置从1开始计算
 */