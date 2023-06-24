const dirs = [
  [1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]
];

function flipChess(chessboard) {
  let res = 0;
  for (let i = 0;i < chessboard.length;++i) {
    for (let j = 0;j < chessboard[0].length;++j) {
      if (chessboard[i][j] === '.') {
        res = Math.max(res, bfs(chessboard, i, j));
      }
    }
  }
  return res;
}

function bfs(chessboard, px, py) {
  const board = [];
  for (let i = 0;i < chessboard.length;++i) {
    board[i] = chessboard[i].split('');
  }
  let cnt = 0;
  const queue = [];
  queue.push([px, py]);
  board[px][py] = 'X';
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1]
  ]; // 8 个方位
  while (queue.length > 0) {
    const t = queue.shift();
    for (let i = 0;i < 8;++i) {
      if (judge(board, t[0], t[1], dirs[i][0], dirs[i][1])) {
        let x = t[0] + dirs[i][0], y = t[1] + dirs[i][1];
        while (board[x][y] !== 'X') {
          queue.push([x, y]);
          board[x][y] = 'X';
          x += dirs[i][0];
          y += dirs[i][1];
          ++cnt;
        }
      }
    }
  }
  return cnt;
}

function judge(board, x, y, dx, dy) {
  x += dx;
  y += dy;
  while (0 <= x && x < board.length && 0 <= y && y < board[0].length) {
    if (board[x][y] === 'X') {
      return true;
    } else if (board[x][y] === '.') {
      return false;
    }
    x += dx;
    y += dy;
  }
  return false;
}