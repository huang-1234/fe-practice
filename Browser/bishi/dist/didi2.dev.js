"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// function getNMarr() {
//   const [n, m] = read_line().trim().split(" ");
//   const arr = new Array(n).fill(0).map((val) => new Array(n))
//   for(let i = 0; i < m; i++) {
//     const [num1,num2] = read_line().trim().split(" ");
//     arr[num1 - 1][num2 - 1] = 1;
//     arr[num2-1][num1-1] = 1;
//   }
//   return [n, m, arr]
// }
function getNMarr() {
  var n = 5,
      m = 3;
  var arr = new Array(n).fill(0).map(function (val) {
    return new Array(n);
  });
  arr[0][1] = 1;
  arr[1][2] = 1;
  arr[3][4] = 1; // const arr = [
  //   [1, 2],
  //   [2, 3],
  //   [4, 5]
  // ];

  return [n, m, arr];
}

function solute() {
  var _getNMarr = getNMarr(),
      _getNMarr2 = _slicedToArray(_getNMarr, 3),
      n = _getNMarr2[0],
      m = _getNMarr2[1],
      arr = _getNMarr2[2];

  var ans = 0;
  var queue = [];

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (arr[i][j]) {
        queue.push([i, j]);
        break;
      }
    }
  }

  while (queue.length) {
    var cur = queue.shift();

    var _cur = _slicedToArray(cur, 2),
        x = _cur[0],
        y = _cur[1];

    if (x - 1 >= 0 && x + 1 <= m - 1 && y - 1 >= 0 && y + 1 <= m - 1) {
      if (arr[x - 1][y]) {
        ans++;
        queue.push([x - 1, y]);
      }

      if (arr[(x + 1, y)]) {
        ans++;
        queue.push([x - 1, y - 1]);
      }

      if (arr[x][y - 1]) {
        ans++;
        queue.push([x, y - 1]);
      }

      if (arr[x][y + 1]) {
        ans++;
        queue.push([x, y + 1]);
      }
    }
  }

  return ans;
}

console.log(solute()); // print(solute())