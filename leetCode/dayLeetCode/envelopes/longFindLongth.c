/* 给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度。
  连续递增的子序列 可以由两个下标 l 和 r（l < r）确定，如果对于每个 l <= i < r，
  都有 nums[i] < nums[i + 1] ，那么子序列[nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] 就是连续递增子序列。
来源：力扣（LeetCode）
链接：https : //leetcode-cn.com/problems/longest-continuous-increasing-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
int findLengthOfLCIS(int *nums, int numsSize)
{
  if (0 == numsSize)
  {
    return 0;
  }
  int start = -1;
  int max = 0;
  int tags = 0;
  for (int i = 0; i < numsSize; ++i)
  {
    if (numsSize - 1 != i && nums[i] < nums[1 + i])
    {
      ++tags;
      max = i - start > max ? i - start : max;
      continue;
    }
    else
    {
      max = i - start > max ? i - start : max;
      start = i;
    }
  }
  if (numsSize - 1 == tags)
  {
    return tags + 1;
  }
  return max;
}