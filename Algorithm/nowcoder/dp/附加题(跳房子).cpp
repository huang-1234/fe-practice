#include<bits/stdc++.h>

using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> dp(n+2, 0);
    vector<long long> p(n+1, 0);
    const long long mod = 1e9 + 7;
    for (int i = 1; i <= n; ++i) {
        cin >> p[i];
    }
    for (int i = 2; i <= n+1; ++i) {
        dp[i] = (dp[i-1] + 1 + dp[i-1] - dp[p[i-1]] + 1) % mod;
    }
    cout << (dp[n+1] < 0 ? dp[n+1] + mod : dp[n+1]) << endl;
}

/* 从题目中，我们发现1<=pi<=i，说明我们只会被传送到当前房间之前的房间（包括当前房间）。
所以当我们到i房间时，我们已经走过所有从第一个房间到第i-1个房间且均为偶数次。
我们定义dp[i]表示从第一个房间达到第i个房间且为偶数次的移动次数。状态转移方程为
dp[i] = dp[i-1] + (dp[i-1] - dp[tp[i-1] - 1] + 1) + 1.
dp[i-1]是第一次到i-1房间的步数，第二次到i-1房间的步数则为第一次步数减去第一次到传送到的房间步数。 */
