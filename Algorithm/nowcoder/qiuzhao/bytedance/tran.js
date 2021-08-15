
/* 作者：HPYAEyes
链接：https://www.nowcoder.com/discuss/702216?channel=-1&source_id=discuss_terminal_discuss_sim_nctrack&ncTraceId=4bfec85aa51e43f3978c9145eb02a4a2.319.16290283567087832
来源：牛客网

算法题，fn([['a', 'b'], ['n', 'm'], ['0', '1']]) => ['an0', 'am0', 'an1', 'am1', 'bn0', 'bm0', 'bn1', 'bm0'] */
function f(matrix) {
  const result = [];
  const len = matrix.length;
  function dfs(res, curr) {
    if (res.length === len) {
      result.push(res.join(''));
      return;
    }
    for (let i = 0;i < matrix[curr].length;i++) {
      res.push(matrix[curr][i]);
      dfs(res, curr + 1);
      res.pop();
    }
  }
  dfs([], 0);
  return result;
}

const queryArr = [['a', 'b'], ['n', 'm'], ['0', '1']]
console.log(f(queryArr));