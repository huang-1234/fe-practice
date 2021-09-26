#include <bits/stdc++.h>
#define ll long long
#define il inline
using namespace std;
template <typename T> il bool read(T& x) {
  x      = 0;
  char c = getchar();
  bool n = 0;
  for (; c < '0' || c > '9'; c = getchar()) {
    if (c == '-')
      n ^= 1;
    else if (c == EOF)
      return 0;
  }
  for (; '0' <= c && c <= '9'; c = getchar())
    x = x * 10 + (c ^ 48);
  n ? (x = -x) : 0;
  return c != EOF;
}
template <typename A, typename... B> il bool read(A& x, B&... y) {
  return read(x) && read(y...);
}
const int             maxm      = 1e3 + 10;
int                   dir[4][2] = {{0, 1}, {1, 0}, {-1, 0}, {0, -1}};
int                   n, m;
bool                  f[maxm][maxm], vis[maxm][maxm];
char                  graph[maxm][maxm];
queue<pair<int, int>> q;

int main() {
  read(n, m);
  for (int i = 1; i <= n; i++) {
    scanf("%s", graph[i] + 1);
  }
  int ans = 0;
  for (int i = 1; i <= n; i++) {
    if (graph[i][1] != '1') {
      q.push(make_pair(i, 1));
      vis[i][1] = 1;
    }
    if (graph[i][m] != '1') {
      q.push(make_pair(i, m));
      vis[i][m] = 1;
    }
  }
  for (int j = 1; j <= m; j++) {
    if (graph[1][j] != '1') {
      q.push(make_pair(1, j));
      vis[1][j] = 1;
    }
    if (graph[n][j] != '1') {
      q.push(make_pair(n, j));
      vis[n][j] = 1;
    }
  }
  while (!q.empty()) {
    pair<int, int> cur = q.front();
    q.pop();
    for (int k = 0; k < 4; k++) {
      int tx = cur.first + dir[k][0];
      int ty = cur.second + dir[k][1];
      if (tx < 1 || tx > n || ty < 1 || ty > m || vis[tx][ty] ||
          graph[tx][ty] == '1')
        continue;
      vis[tx][ty] = 1;
      q.push(make_pair(tx, ty));
    }
  }
  for (int i = 1; i <= n; i++)
    for (int j = 1; j <= m; j++)
      ans += (graph[i][j] == '0') && (vis[i][j] == true);
  printf("%d\n", ans);
  return 0;
}
/*
1 1
1

1 1
0

1 1
.

3 3
.1.
101
.1.


*/

/* 在游戏中，因为一次错误的决断，你的士兵被敌方实行围剿。为了挽回人员损失，你不得不开启金手指暂停敌方士兵的移动，
从而尽量让自己的士兵能成功突围。
已知地图是一块n \times mn×m的区域，每块格子有以下几种类型：

.：表示此处为一块空地。

1：表示此处有敌方士兵，不许通过。因为开启了金手指，所以敌方士兵不会移动。

0：表示此处有我方士兵。

现规定我方士兵只能进行上/下/左/右四个方向的移动，只要某个士兵移动出了地图边界，那么就算该士兵突围成功。请问能有多少士兵成功突围。
*/