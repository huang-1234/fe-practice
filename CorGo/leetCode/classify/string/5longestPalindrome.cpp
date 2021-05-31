#include <iostream>
#include <string>
#include <vector>

using namespace std;

/* 思路与算法

对于一个子串而言，如果它是回文串，并且长度大于
22，那么将它首尾的两个字母去除之后，它仍然是个回文串。例如对于字符串
\textrm{``ababa''}“ababa”，如果我们已经知道 \textrm{``bab''}“bab” 是回文串，那么
\textrm{``ababa''}“ababa” 一定是回文串，这是因为它的首尾两个字母都是
\textrm{``a''}“a”。

根据这样的思路，我们就可以用动态规划的方法解决本题。我们用 P(i,j)P(i,j)
表示字符串 ss 的第 ii 到 jj 个字母组成的串（下文表示成
s[i:j]s[i:j]）是否为回文串：

P(i,j) = \begin{cases} \text{true,} &\quad\text{如果子串~} S_i \dots S_j
\text{~是回文串}\\ \text{false,} &\quad\text{其它情况} \end{cases} P(i,j)={
true,
false,
​

如果子串 S
i
​
 …S
j
​
  是回文串
其它情况
​


这里的「其它情况」包含两种可能性：

s[i, j]s[i,j] 本身不是一个回文串；

i > ji>j，此时 s[i, j]s[i,j] 本身不合法。

那么我们就可以写出动态规划的状态转移方程：

P(i, j) = P(i+1, j-1) \wedge (S_i == S_j)
P(i,j)=P(i+1,j−1)∧(S i==S j)

也就是说，只有 s[i+1:j-1]s[i+1:j−1] 是回文串，并且 ss 的第 ii 和 jj
个字母相同时，s[i:j]s[i:j] 才会是回文串。

上文的所有讨论是建立在子串长度大于 22
的前提之上的，我们还需要考虑动态规划中的边界条件，即子串的长度为 11 或
22。对于长度为 11 的子串，它显然是个回文串；对于长度为 22
的子串，只要它的两个字母相同，它就是一个回文串。因此我们就可以写出动态规划的边界条件：

\begin{cases} P(i, i) = \text{true} \\ P(i, i+1) = ( S_i == S_{i+1} )
\end{cases}
{
P(i,i)=true
P(i,i+1)=(S  i ==S  i+1 )
​

根据这个思路，我们就可以完成动态规划了，最终的答案即为所有 P(i, j) =
\text{true}P(i,j)=true 中 j-i+1j−i+1（即子串长度）的最大值。
注意：在状态转移方程中，我们是从长度较短的字符串向长度较长的字符串进行转移的，因此一定要注意动态规划的循环顺序。
 */
class Solution {
 public:
  string longestPalindrome(string s) {
    int n = s.size();
    if (n < 2) {
      return s;
    }

    int maxLen = 1;
    int begin = 0;
    // dp[i][j] 表示 s[i..j] 是否是回文串
    vector<vector<int>> dp(n, vector<int>(n));
    // 初始化：所有长度为 1 的子串都是回文串
    for (int i = 0; i < n; i++) {
      dp[i][i] = true;
    }
    // 递推开始
    // 先枚举子串长度
    for (int L = 2; L <= n; L++) {
      // 枚举左边界，左边界的上限设置可以宽松一些
      for (int i = 0; i < n; i++) {
        // 由 L 和 i 可以确定右边界，即 j - i + 1 = L 得
        int j = L + i - 1;
        // 如果右边界越界，就可以退出当前循环
        if (j >= n) {
          break;
        }

        if (s[i] != s[j]) {
          dp[i][j] = false;
        } else {
          if (j - i < 3) {
            dp[i][j] = true;
          } else {
            dp[i][j] = dp[i + 1][j - 1];
          }
        }

        // 只要 dp[i][L] == true 成立，就表示子串 s[i..L]
        // 是回文，此时记录回文长度和起始位置
        if (dp[i][j] && j - i + 1 > maxLen) {
          maxLen = j - i + 1;
          begin = i;
        }
      }
    }
    return s.substr(begin, maxLen);
  }
};