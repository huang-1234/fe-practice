#include <iostream>
#include <map>
#include <queue>

using namespace std;

queue<int> Q;
map<int, int> vis;  //标记数组
map<int, int> step; //记录到这种状态的步数

int dir[4][2] = {-1, 0, 0, 1, 1, 0, 0, -1}; //上，右，下，左
int mat[3][3];
int state; //输入的初始状态
int r, c;

void input() //输入数据并将矩阵转化为一个九位整数
{
  int tmp = 0;
  for (int i = 0; i < 3; i++)
    for (int j = 0; j < 3; j++)
    {
      cin >> mat[i][j];
      tmp = tmp * 10 + mat[i][j];
    }
  state = tmp;
}

bool can_move(int u, int d) //判断是否可以走
{
  for (int i = 2; i >= 0; i--) //将整数变回矩阵才好判断
  {
    for (int j = 2; j >= 0; j--)
    {
      mat[i][j] = u % 10;
      u /= 10;
      if (mat[i][j] == 0)
      {
        r = i;
        c = j;
      }
    }
  }
  //判断四个方向是否能走
  if ((d == 0 && r == 0) || (d == 1 && c == 2) || (d == 2 && r == 2) || (d == 3 && c == 0))
    return 0;
  return 1;
}

int move_to(int u, int d) //返回从状态u走到的状态
{
  int tmp = 0;
  int nr = r + dir[d][0];
  int nc = c + dir[d][1];
  mat[r][c] = mat[nr][nc];
  mat[nr][nc] = 0;
  for (int i = 0; i < 3; i++)
  {
    for (int j = 0; j < 3; j++)
      tmp = tmp * 10 + mat[i][j];
  }
  return tmp;
}

int bfs(int s)
{
  Q.push(s);
  vis[s] = 1;
  step[s] = 0;
  while (Q.size())
  {
    int u, v;
    u = Q.front();
    Q.pop();
    if (u == 123456780)
      return step[u];
    for (int i = 0; i < 4; i++)
    {
      if (can_move(u, i))
      {
        v = move_to(u, i);
        if (!vis[v])
        {
          vis[v] = 1;
          step[v] = step[u] + 1;
          Q.push(v);
        }
      }
    }
  }
  return -1;
}

int main()
{
  input();
  int ans = bfs(state);
  cout << ans << endl;
  return 0;
}
