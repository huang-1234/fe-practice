def haveCircularDependency(self, n: int, prerequisites):
    g = [[]for i in range(n)] #邻接表存储图结构
    indeg = [0 for i in range(n)] #每个点的入度
    res = [] #存储结果序列
    q = deque()
    #将依赖关系加入邻接表中g，并各个点入度
    for pre in prerequisites:
        a, b = pre[0], pre[1]
        g[a].append(b)
        indeg[b] += 1
    #一次性将入度为0的点全部入队
    for i in range(n):
        if indeg[i] == 0:
            q.append(i)
    while q:
        t = q.popleft()
        res.append(t)
        #删除边时，将终点的入度-1。若入度为0，果断入队
        for j in g[t]:
            indeg[j] -= 1
            if indeg[j] == 0:
                q.append(j)
    if len(res) == n:
        return res
    else:
        return []