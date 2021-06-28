#include <iostream>
#include <vector>
#include <ctime>
#include <cstdlib>
#define maxState 10000
#define N 3
using namespace std;

bool isEqual(int a[N][N][maxState], int b[N][N], int n)
{
  for (int i = 0; i < N; i++)
  {
    for (int j = 0; j < N; j++)
    {
      if (a[i][j][n] != b[i][j])
        return false;
    }
  }
  return true;
}

bool isEqual(int a[N][N], int b[N][N])
{
  for (int i = 0; i < N; i++)
  {
    for (int j = 0; j < N; j++)
    {
      if (a[i][j] != b[i][j])
        return false;
    }
  }
  return true;
}

int evalute(int state[N][N], int target[N][N])
{
  int num = 0;
  for (int i = 0; i < N; i++)
  {
    for (int j = 0; j < N; j++)
      if (state[i][j] != target[i][j])
        num++;
  }
  return num;
}

void findBrack(int a[N][N], int x, int y)
{
  for (int i = 0; i < N; i++)
  {
    for (int j = 0; j < N; j++)
    {
      if (a[i][j] == 0)
      {
        x = i;
        y = j;
        return;
      }
    }
  }
}

bool move(int a[N][N], int b[N][N], int dir)
{
  //1 up 2 down 3 left 4 right
  int x = 0, y = 0;
  for (int i = 0; i < N; i++)
  {
    for (int j = 0; j < N; j++)
    {
      b[i][j] = a[i][j];
      if (a[i][j] == 0)
      {
        x = i;
        y = j;
      }
    }
  }
  if (x == 0 && dir == 1)
    return false;
  if (x == N - 1 && dir == 2)
    return false;
  if (y == 0 && dir == 3)
    return false;
  if (y == N - 1 && dir == 4)
    return false;
  if (dir == 1)
  {
    b[x - 1][y] = 0;
    b[x][y] = a[x - 1][y];
  }
  else if (dir == 2)
  {
    b[x + 1][y] = 0;
    b[x][y] = a[x + 1][y];
  }
  else if (dir == 3)
  {
    b[x][y - 1] = 0;
    b[x][y] = a[x][y - 1];
  }
  else if (dir == 4)
  {
    b[x][y + 1] = 0;
    b[x][y] = a[x][y + 1];
  }
  else
    return false;
  return true;
}

void statecpy(int a[N][N][maxState], int b[N][N], int n)
{
  for (int i = 0; i < N; i++)
  {
    for (int j = 0; j < N; j++)
    {
      a[i][j][n] = b[i][j];
    }
  }
}

void getState(int a[N][N][maxState], int b[N][N], int n)
{
  for (int i = 0; i < N; i++)
  {
    for (int j = 0; j < N; j++)
    {
      b[i][j] = a[i][j][n];
    }
  }
}

void statecpy(int a[N][N], int b[N][N])
{
  for (int i = 0; i < N; i++)
  {
    for (int j = 0; j < N; j++)
      a[i][j] = b[i][j];
  }
}
int checkAdd(int a[N][N][maxState], int b[N][N], int n)
{
  for (int i = 0; i < n; i++)
  {
    if (isEqual(a, b, i))
      return i;
  }
  return -1;
}

int Astar(int a[N][N][maxState], int start[N][N], int target[N][N], int path[maxState])
{
  bool visited[maxState] = {false};
  int fitness[maxState] = {0};
  int passLen[maxState] = {0};
  int curpos[N][N];
  statecpy(curpos, start);
  int id = 0, Curid = 0;
  fitness[id] = evalute(curpos, target);
  statecpy(a, start, id++);
  while (!isEqual(curpos, target))
  {
    for (int i = 1; i < 5; i++)
    { //向四周找方向
      int tmp[N][N] = {0};
      if (move(curpos, tmp, i))
      {
        int state = checkAdd(a, tmp, id);
        if (state == -1)
        { //not add
          path[id] = Curid;
          passLen[id] = passLen[Curid] + 1;
          fitness[id] = evalute(tmp, target) + passLen[id];
          statecpy(a, tmp, id++);
        }
        else
        { //add
          int len = passLen[Curid] + 1, fit = evalute(tmp, target) + len;
          if (fit < fitness[state])
          {
            path[state] = Curid;
            passLen[state] = len;
            fitness[state] = fit;
            visited[state] = false;
          }
        }
      }
    }
    visited[Curid] = true;
    //找到适应度最小的最为下一个带搜索节点
    int minCur = -1;
    for (int i = 0; i < id; i++)
      if (!visited[i] && (minCur == -1 || fitness[i] < fitness[minCur]))
        minCur = i;
    Curid = minCur;
    getState(a, curpos, Curid);
    if (id == maxState)
      return -1;
  }
  return Curid;
}

void show(int a[N][N][maxState], int n)
{
  cout << "-------------------------------\n";
  for (int i = 0; i < N; i++)
  {
    for (int j = 0; j < N; j++)
    {
      cout << a[i][j][n] << " ";
    }
    cout << endl;
  }
  cout << "-------------------------------\n";
}

int calDe(int a[N][N])
{
  int sum = 0;
  for (int i = 0; i < N * N; i++)
  {
    for (int j = i + 1; j < N * N; j++)
    {
      int m, n, c, d;
      m = i / N;
      n = i % N;
      c = j / N;
      d = j % N;
      if (a[c][d] == 0)
        continue;
      if (a[m][n] > a[c][d])
        sum++;
    }
  }
  return sum;
}

void autoGenerate(int a[N][N])
{
  int maxMove = 50;
  srand((unsigned)time(NULL));
  int tmp[N][N];
  while (maxMove--)
  {
    int dir = rand() % 4 + 1;
    if (move(a, tmp, dir))
      statecpy(a, tmp);
  }
}

int main()
{
  int a[N][N][maxState] = {0};
  int start[N][N] = {1, 2, 3, 4, 5, 6, 7, 8, 0};
  autoGenerate(start);
  cout << start[0][0] << start[1][1];
  //    int start[N][N] = {4,0,5,1,2,3,7,8,6};

  int target[N][N] = {1, 2, 3, 4, 5, 6, 7, 8, 0};

  if (!(calDe(start) % 2 == calDe(target) % 2))
  {
    cout << "无解\n";
    return 0;
  }

  int path[maxState] = {0};
  int res = Astar(a, start, target, path);
  if (res == -1)
  {
    cout << "达到最大搜索能力\n";
    return 0;
  }
  int shortest[maxState] = {0}, j = 0;
  while (res != 0)
  {
    shortest[j++] = res;
    res = path[res];
  }
  cout << "第 0 步\n";
  show(a, 0);
  for (int i = j - 1; i >= 0; i--)
  {
    cout << "第 " << j - i << " 步\n";
    show(a, shortest[i]);
  }
  return 0;
}
