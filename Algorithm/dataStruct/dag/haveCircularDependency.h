vector<int> haveCircularDependency(int n, vector<vector<int>>& prerequisites) {
  //邻接表存储图结构
  vector<vector<int>> g(n);
  //每个点的入度
  vector<int>         indeg(n);
  //存储结果序列
  vector<int>         res;
  for (int i = 0; i < prerequisites.size(); i++) {
    int a = prerequisites[i][0], b = prerequisites[i][1];
    g[a].push_back(b);
    indeg[b]++;
  }
  queue<int> q;
  //一次性将入度为0的点全部入队
  for (int i = 0; i < n; i++) {
    if (indeg[i] == 0)
      q.push(i);
  }
  while (q.size()) {
    int t = q.front();
    q.pop();
    res.push_back(t);
    //删除边时，将终点的入度-1。若入度为0，果断入队
    for (int i = 0; i < g[t].size(); i++) {
      int j = g[t][i];
      indeg[j]--;
      if (indeg[j] == 0) {
        q.push(j);
      }
    }
  }
  if (res.size() == n)
    return res;
  else
    return {};
}